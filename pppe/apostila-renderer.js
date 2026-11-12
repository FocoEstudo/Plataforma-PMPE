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
  global.PPPE_APOSTILA_RENDERER = Object.freeze({ escapeHtml, renderBlocks });
})(window);