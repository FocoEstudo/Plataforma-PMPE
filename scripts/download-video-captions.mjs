import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const platforms = ['pcpe', 'pmpe', 'pppe', 'all'];

function parseArgs(args) {
    const options = {
        outputDir: null,
        platform: 'pcpe',
        ytDlp: process.env.YT_DLP_PATH || 'yt-dlp',
        sleepSeconds: 1,
        listOnly: false
    };

    for (let index = 0; index < args.length; index++) {
        const arg = args[index];
        if (arg === '--list') options.listOnly = true;
        else if (arg === '--platform' && args[index + 1]) options.platform = args[++index].toLowerCase();
        else if (arg === '--output-dir' && args[index + 1]) options.outputDir = path.resolve(args[++index]);
        else if (arg === '--yt-dlp' && args[index + 1]) options.ytDlp = args[++index];
        else if (arg === '--sleep-seconds' && args[index + 1]) {
            options.sleepSeconds = Number(args[++index]);
            if (!Number.isFinite(options.sleepSeconds) || options.sleepSeconds < 0) {
                throw new Error('--sleep-seconds deve ser um número igual ou maior que zero.');
            }
        }
        else if (arg === '--help' || arg === '-h') options.help = true;
        else throw new Error(`Opção desconhecida ou sem valor: ${arg}`);
    }

    if (!platforms.includes(options.platform)) {
        throw new Error(`Plataforma inválida: ${options.platform}. Use ${platforms.join(', ')}.`);
    }
    if (!options.outputDir) {
        options.outputDir = path.join(os.tmpdir(), `${options.platform}-video-captions`);
    }

    return options;
}

function loadVideoCatalog(platform) {
    const context = vm.createContext({
        window: { PCPE_ROLE: 'agente' },
        console,
        URL
    });
    const sources = [
        'pppe/modulos-pppe.js',
        'pppe/videos-pppe.js',
        'pppe/videos-complementares.js',
        'videos-pmpe.js',
        'pcpe/video-mapeamento.js',
        'pcpe/videos-pcpe.js',
        'pcpe/modulos-pcpe.js'
    ];

    for (const relativePath of sources) {
        const filename = path.join(root, relativePath);
        if (!existsSync(filename)) throw new Error(`Arquivo do catálogo ausente: ${relativePath}`);
        vm.runInContext(readFileSync(filename, 'utf8'), context, { filename });
    }

    const window = context.window;
    if (!Array.isArray(window.PCPE_MODULOS) || !Array.isArray(window.PPPE_MODULOS)
        || !window.PPPE_VIDEOS || !window.PPPE_VIDEOS_COMPLEMENTARES) {
        throw new Error('Não foi possível carregar os catálogos atuais de videoaulas.');
    }

    const lessons = [];
    function appendCatalogTopic(topic, missionTopic = topic, contentPlatform = platform) {
        const complementary = (window.PPPE_VIDEOS_COMPLEMENTARES[topic] || []).map(([videoId, title]) => ({
            title,
            urls: [`https://www.youtube.com/watch?v=${videoId}`]
        }));
        const curatedTitles = Object.values(window.PCPE_VIDEO_MAP || {})
            .flat()
            .find(([mappedTopic]) => mappedTopic === topic)?.[1];
        const moduleLessons = [...(window.PPPE_VIDEOS[topic] || []), ...complementary]
            .filter(lesson => contentPlatform !== 'pcpe' || !curatedTitles || curatedTitles.includes(lesson.title));

        for (const lesson of moduleLessons) {
            for (const url of lesson.urls || []) {
                let videoId = '';
                try {
                    const parsed = new URL(url);
                    videoId = parsed.hostname.includes('youtu.be')
                        ? parsed.pathname.slice(1).split('/')[0]
                        : parsed.searchParams.get('v') || parsed.pathname.split('/').filter(Boolean).pop() || '';
                } catch (error) {
                    console.warn(`URL ignorada no tópico "${missionTopic}": ${url}`, error.message);
                    continue;
                }
                if (!/^[\w-]{11}$/.test(videoId)) {
                    console.warn(`ID de vídeo inválido no tópico "${missionTopic}": ${url}`);
                    continue;
                }
                lessons.push({ videoId, platform: contentPlatform, topic: missionTopic, sourceTopic: topic, title: lesson.title, url });
            }
        }
    }

    function appendDirectVideo(videoId, topic, title, contentPlatform = 'pmpe') {
        if (!/^[\w-]{11}$/.test(videoId)) {
            console.warn(`ID de vídeo inválido no tópico "${topic}": ${videoId}`);
            return;
        }
        lessons.push({
            videoId,
            platform: contentPlatform,
            topic,
            sourceTopic: topic,
            title,
            url: `https://www.youtube.com/watch?v=${videoId}`
        });
    }

    if (platform === 'pcpe' || platform === 'all') {
        for (const module of window.PCPE_MODULOS) appendCatalogTopic(module.topic, module.topic, 'pcpe');
    }
    if (platform === 'pppe' || platform === 'all') {
        for (const module of window.PPPE_MODULOS) appendCatalogTopic(module.topic, module.topic, 'pppe');
    }
    if (platform === 'pmpe' || platform === 'all') {
        for (const [topic, mapping] of Object.entries(window.PMPE_VIDEO_TOPIC_MAP || {})) {
            for (const sourceTopic of mapping.pppe || []) appendCatalogTopic(sourceTopic, topic, 'pmpe');
            for (const [videoId, title] of mapping.videos || []) appendDirectVideo(videoId, topic, title, 'pmpe');
        }
    }

    const unique = new Map();
    for (const lesson of lessons) {
        const existing = unique.get(lesson.videoId);
        if (existing) {
            existing.topics.push({ platform: lesson.platform, topic: lesson.topic, sourceTopic: lesson.sourceTopic });
        } else {
            unique.set(lesson.videoId, {
                ...lesson,
                topics: [{ platform: lesson.platform, topic: lesson.topic, sourceTopic: lesson.sourceTopic }]
            });
        }
    }
    return [...unique.values()];
}

function printHelp() {
    console.log([
        'Baixa legendas em português dos vídeos listados nas missões PCPE, PMPE e PPPE.',
        '',
        'Uso:',
        '  node scripts/download-video-captions.mjs [--platform pcpe|pmpe|pppe|all] [--list] [--sleep-seconds SEGUNDOS] [--yt-dlp CAMINHO] [--output-dir PASTA]',
        '',
        'A plataforma padrão é pcpe; cada plataforma usa uma pasta temporária própria.',
        'Requer yt-dlp instalado ou informado por --yt-dlp/YT_DLP_PATH.',
        'Baixa apenas legendas; os arquivos ficam fora do repositório por padrão.'
    ].join('\n'));
}

function main() {
    const options = parseArgs(process.argv.slice(2));
    if (options.help) {
        printHelp();
        return;
    }

    const lessons = loadVideoCatalog(options.platform);
    if (options.listOnly) {
        for (const lesson of lessons) console.log(`${lesson.videoId}\t${lesson.platform}\t${lesson.topic}\t${lesson.title}\t${lesson.url}`);
        console.log(`Total: ${lessons.length} vídeos únicos para ${options.platform.toUpperCase()}.`);
        return;
    }

    mkdirSync(options.outputDir, { recursive: true });
    const manifestPath = path.join(options.outputDir, 'manifest.json');
    writeFileSync(manifestPath, JSON.stringify(lessons, null, 2) + '\n', 'utf8');

    const failures = [];
    const availableCaptions = new Set(
        readdirSync(options.outputDir)
            .filter(filename => filename.toLowerCase().endsWith('.vtt'))
            .map(filename => filename.split('.')[0])
    );
    for (const [index, lesson] of lessons.entries()) {
        if (availableCaptions.has(lesson.videoId)) {
            console.log(`[${index + 1}/${lessons.length}] ${lesson.title} (${lesson.videoId}) — legenda já disponível`);
            continue;
        }
        console.log(`[${index + 1}/${lessons.length}] ${lesson.title} (${lesson.videoId})`);
        const result = spawnSync(options.ytDlp, [
            '--no-warnings',
            '--skip-download',
            '--write-subs',
            '--write-auto-subs',
            '--sub-langs', 'pt,pt-BR,pt-orig',
            '--sub-format', 'vtt',
            '--sleep-requests', String(options.sleepSeconds),
            '--sleep-subtitles', String(options.sleepSeconds),
            '--retry-sleep', 'http:exp=2:60',
            '--output', path.join(options.outputDir, '%(id)s.%(ext)s'),
            lesson.url
        ], { encoding: 'utf8', windowsHide: true, timeout: 120000 });

        if (result.stdout) process.stdout.write(result.stdout);
        if (result.stderr) process.stderr.write(result.stderr);
        if (result.error || result.status !== 0) {
            failures.push({
                videoId: lesson.videoId,
                title: lesson.title,
                error: result.error?.message || `yt-dlp saiu com código ${result.status}`
            });
        } else if (readdirSync(options.outputDir).some(filename =>
            filename.startsWith(`${lesson.videoId}.`) && filename.toLowerCase().endsWith('.vtt'))) {
            availableCaptions.add(lesson.videoId);
        } else {
            failures.push({
                videoId: lesson.videoId,
                title: lesson.title,
                error: 'yt-dlp terminou sem gerar um arquivo de legenda VTT.'
            });
        }
    }

    if (failures.length) {
        writeFileSync(path.join(options.outputDir, 'failures.json'), JSON.stringify(failures, null, 2) + '\n', 'utf8');
        console.error(`${failures.length} de ${lessons.length} vídeos não tiveram legendas baixadas. Veja failures.json.`);
        process.exitCode = 1;
    } else {
        console.log(`Legendas processadas para ${lessons.length} vídeos. Manifesto: ${manifestPath}`);
    }
}

try {
    main();
} catch (error) {
    console.error(error.message);
    process.exitCode = 1;
}
