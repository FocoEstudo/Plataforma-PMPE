(function (window) {
  'use strict';

  const escapeHtml = value => String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

  function buildSubjectGuide(subject, modules, courseId) {
    if (typeof subject !== 'string' || !subject.trim()) {
      throw new TypeError('A disciplina da apostila completa é obrigatória.');
    }
    if (!Array.isArray(modules) || !modules.length) {
      throw new TypeError('A apostila completa precisa de ao menos um módulo.');
    }
    if (modules.some(module => !module || typeof module.topic !== 'string' || !module.topic.trim())) {
      throw new TypeError('Todos os módulos precisam de um tema válido.');
    }

    const prefix = 'pcpe-curso-' + String(courseId).replace(/[^a-zA-Z0-9_-]/g, '-');
    const index = modules.map((module, position) =>
      `<li><a href="#${prefix}-tema-${position + 1}">${escapeHtml(module.topic)}</a></li>`
    ).join('');
    const chapters = modules.map((module, position) => {
      const scope = (module.scope || []).map(item => `<li>${escapeHtml(item)}</li>`).join('');
      return `<section class="subject-guide-module" id="${prefix}-tema-${position + 1}">
        <h2>${escapeHtml(module.topic)}</h2>
        ${scope ? `<section><h3>Itens do edital</h3><ul>${scope}</ul></section>` : ''}
        ${module.references || ''}
        ${module.content || ''}
      </section>`;
    }).join('');

    return `<article class="topic-guide">
      <section class="apostila-cover">
        <p class="apostila-cover-kicker">Operação PCPE · Caderno completo</p>
        <p>POLÍCIA CIVIL DE PERNAMBUCO</p>
        <h1>${escapeHtml(subject)}</h1>
        <p class="apostila-cover-note">Conteúdo consolidado de todos os temas desta disciplina. Confira o edital e as fontes oficiais vigentes.</p>
        <p class="apostila-cover-meta">${modules.length} temas</p>
      </section>
      <nav class="apostila-index" aria-label="Roteiro da apostila">
        <h2>Conteúdo completo</h2>
        <ol>${index}</ol>
      </nav>
      ${chapters}
    </article>`;
  }

  window.PCPE_APOSTILA_COMPLETA = Object.freeze({ buildSubjectGuide });
})(window);
