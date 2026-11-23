(function () {
  'use strict';
  const modules = window.PCPE_MODULOS || [];
  const pcpeGuides = window.PCPE_TOPIC_GUIDES || (window.PCPE_TOPIC_GUIDES = {});
  const pcpeDeepening = window.PCPE_DEEPENING || (window.PCPE_DEEPENING = {});
  const pcpeQuestions = window.PCPE_QUESTOES || (window.PCPE_QUESTOES = {});
  const sharedGuides = window.PMPE_TOPIC_GUIDES || {};
  const sharedDeepening = window.PMPE_DEEPENING || {};
  const sharedQuestions = window.PPPE_QUESTOES || {};

  const copyGuide = guide => ({
    ...guide,
    scope: [...(guide.scope || [])],
    lessons: guide.lessons.map(lesson => [...lesson]),
    practice: [...(guide.practice || [])],
    answers: [...(guide.answers || [])],
    sources: (guide.sources || []).map(source => [...source])
  });

  modules.forEach(module => {
    const topic = module.topic;
    const localGuide = pcpeGuides[topic];
    if (!localGuide?.lessons?.length) {
      const sourceGuide = sharedGuides[topic];
      if (sourceGuide?.lessons?.length) pcpeGuides[topic] = copyGuide(sourceGuide);
    }

    if (!pcpeDeepening[topic] || !Object.keys(pcpeDeepening[topic]).length) {
      const sourceDeepening = sharedDeepening[topic];
      if (sourceDeepening) {
        pcpeDeepening[topic] = Object.fromEntries(
          Object.entries(sourceDeepening).map(([lesson, blocks]) => [lesson, blocks.map(block => [...block])])
        );
      }
    }

    if (pcpeQuestions[topic]?.length !== 10) {
      const sourceQuestions = sharedQuestions[topic];
      if (Array.isArray(sourceQuestions) && sourceQuestions.length === 10) {
        pcpeQuestions[topic] = sourceQuestions.map(question => ({
          ...question,
          options: [...question.options]
        }));
      }
    }
  });
})();
