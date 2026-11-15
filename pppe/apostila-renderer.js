(function (global) {
  const escapeHtml = value => String(value ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  function renderBlocks(blocks) {
    const list = Array.isArray(blocks) ? blocks : [];
    const renderBlock = block => {
      if (!Array.isArray(block) || block.length < 2) return "";
      const [type, value] = block;
      if (type === "h") return `<h3>${escapeHtml(value)}</h3>`;
      if (type === "p") return `<p>${escapeHtml(value)}</p>`;
      if ((type === "ul" || type === "ol") && Array.isArray(value)) return `<${type}>${value.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</${type}>`;
      return "";
    };
    const start = list.findIndex(([type, value]) => type === "h" && /^\s*(\d+\.\s*)?resumo/i.test(String(value)));
    if (start < 0) return list.map(renderBlock).join("");
    let end = list.findIndex(([type], index) => index > start && type === "h");
    if (end < 0) end = list.length;
    const summary = list.slice(start + 1, end);
    if (!summary.length) return list.map(renderBlock).join("");
    const rest = [...list.slice(0, start), ...list.slice(end)];
    return `<aside class="apostila-essential"><p><strong>Essencial desta aula · ${escapeHtml(list[start][1])}</strong></p>${summary.map(renderBlock).join("")}</aside>${rest.map(renderBlock).join("")}`;
  }
  function renderVideoReferences(topic) {
    const lessons = (global.PPPE_VIDEOS && global.PPPE_VIDEOS[topic]) || [];
    const supplementary = (global.PPPE_VIDEOS_COMPLEMENTARES && global.PPPE_VIDEOS_COMPLEMENTARES[topic]) || [];
    const entries = [
      ...lessons.flatMap(lesson => (Array.isArray(lesson.urls) ? lesson.urls : []).map(url => [lesson.title, url])),
      ...supplementary.map(([id, title]) => [title, `https://www.youtube.com/watch?v=${id}`])
    ];
    const seen = new Set();
    const links = entries.filter(([title, url]) => {
      if (!title || typeof url !== 'string' || !/^https:\/\/(?:www\.)?(?:youtube\.com|youtu\.be)\//i.test(url) || seen.has(url)) return false;
      seen.add(url);
      return true;
    }).map(([title, url]) => `<li><a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(title)}</a></li>`).join('');
    if (!links) return '';
    return `<section class="apostila-video-references"><h2>Videoaulas relacionadas ao tema</h2><p>As aulas foram selecionadas pelo tema; esta apostila não é uma transcrição e cada vídeo pode abordar apenas parte do conteúdo. Confira o edital e as fontes oficiais.</p><ul>${links}</ul></section>`;
  }
  global.PPPE_APOSTILA_RENDERER = Object.freeze({ escapeHtml, renderBlocks, renderVideoReferences });
})(window);