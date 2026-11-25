(function () {
    'use strict';

    const path = window.location.pathname.toLowerCase();
    const app = /\/pcpe(?:\/|$)/.test(path) ? 'pcpe' : /\/pppe(?:\/|$)/.test(path) ? 'pppe' : 'pmpe';
    const storageKey = `videoPlaybackResumeV1:${app}`;
    let apiPromise = null;
    let player = null;
    let playerFrame = null;
    let playerReady = false;
    let activeState = null;
    let requestId = 0;

    function readState() {
        try {
            const value = JSON.parse(localStorage.getItem(storageKey) || 'null');
            return value && typeof value === 'object' && !Array.isArray(value) ? value : null;
        } catch (error) {
            console.error('Não foi possível ler a posição salva da videoaula.', error);
            return null;
        }
    }

    function writeState() {
        if (!activeState) return;
        try {
            localStorage.setItem(storageKey, JSON.stringify(activeState));
        } catch (error) {
            console.error('Não foi possível salvar a posição da videoaula.', error);
        }
    }

    function saveCurrentTime() {
        if (!playerReady || !player || !activeState || typeof player.getCurrentTime !== 'function') return;
        const time = player.getCurrentTime();
        if (Number.isFinite(time) && time >= 0) {
            activeState.currentTime = time;
            writeState();
        }
    }

    function loadYouTubeApi() {
        if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
        if (apiPromise) return apiPromise;

        apiPromise = new Promise((resolve, reject) => {
            const previousCallback = window.onYouTubeIframeAPIReady;
            const timeout = window.setTimeout(() => reject(new Error('Tempo esgotado ao carregar a API do YouTube.')), 15000);
            window.onYouTubeIframeAPIReady = () => {
                if (typeof previousCallback === 'function') previousCallback();
                window.clearTimeout(timeout);
                resolve(window.YT);
            };
            const script = document.createElement('script');
            script.src = 'https://www.youtube.com/iframe_api';
            script.onerror = () => {
                window.clearTimeout(timeout);
                reject(new Error('Não foi possível carregar a API do YouTube.'));
            };
            document.head.appendChild(script);
        }).catch(error => {
            apiPromise = null;
            throw error;
        });
        return apiPromise;
    }

    function getResumeState(lessons) {
        const saved = readState();
        if (!saved || typeof saved.lessonId !== 'string' || !Number.isInteger(saved.partIndex)) return null;
        const entries = Array.isArray(lessons) ? lessons : Object.values(lessons || {});
        const lesson = entries.find(item => item && item.id === saved.lessonId);
        const part = lesson && lesson.videos && lesson.videos[saved.partIndex];
        if (!part || part.videoId !== saved.videoId) return null;
        return {
            lessonId: lesson.id,
            partIndex: saved.partIndex,
            view: typeof saved.view === 'string' ? saved.view : ''
        };
    }

    async function play(frame, state, statusElement) {
        saveCurrentTime();
        const previous = readState();
        const sameVideo = previous && previous.lessonId === state.lessonId &&
            previous.partIndex === state.partIndex && previous.videoId === state.videoId;
        const startSeconds = sameVideo && Number.isFinite(previous.currentTime)
            ? Math.max(0, previous.currentTime)
            : 0;
        activeState = { ...state, currentTime: startSeconds };
        writeState();
        const currentRequestId = ++requestId;

        try {
            const YT = await loadYouTubeApi();
            if (currentRequestId !== requestId) return true;
            if (player && playerFrame === frame) {
                player.cueVideoById({ videoId: state.videoId, startSeconds });
            } else {
                playerFrame = frame;
                playerReady = false;
                player = new YT.Player(frame, {
                    videoId: state.videoId,
                    playerVars: {
                        enablejsapi: 1,
                        origin: window.location.origin,
                        rel: 0,
                        autoplay: 0,
                        start: Math.floor(startSeconds)
                    },
                    events: {
                        onReady: () => {
                            playerReady = true;
                            saveCurrentTime();
                        },
                        onStateChange: saveCurrentTime
                    }
                });
            }
            if (statusElement) statusElement.textContent = '';
            return true;
        } catch (error) {
            console.error('Não foi possível ativar a retomada automática da videoaula.', error);
            const embedUrl = new URL(`https://www.youtube.com/embed/${state.videoId}`);
            embedUrl.searchParams.set('rel', '0');
            embedUrl.searchParams.set('origin', window.location.origin);
            if (startSeconds > 0) embedUrl.searchParams.set('start', String(Math.floor(startSeconds)));
            frame.src = embedUrl.toString();
            if (statusElement) statusElement.textContent = 'Retomada automática indisponível; o vídeo continua acessível. A posição pode não ser salva.';
            return false;
        }
    }

    function saveView(view) {
        const saved = readState() || {};
        saved.view = view;
        try {
            localStorage.setItem(storageKey, JSON.stringify(saved));
        } catch (error) {
            console.error('Não foi possível salvar a aba atual.', error);
        }
    }

    window.PMPE_VIDEO_PLAYBACK = {
        play,
        restore: getResumeState,
        saveView,
        restoreView: () => readState()?.view || ''
    };

    window.setInterval(saveCurrentTime, 5000);
    window.addEventListener('pagehide', saveCurrentTime);
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') saveCurrentTime();
    });
})();
