(function (root) {
  'use strict';
  function grade(questions, answers) {
    let correct = 0, answered = 0;
    const topics = {}, parts = {}, levels = {};
    const items = questions.map(question => {
      const chosen = answers[question.id];
      const hasAnswer = Number.isInteger(chosen) && chosen >= 0 && chosen < question.choices.length;
      const right = hasAnswer && chosen === question.correct;
      answered += Number(hasAnswer);
      correct += Number(right);
      for (const [map, key] of [[topics, question.topic], [parts, question.part], [levels, question.level]]) {
        if (!map[key]) map[key] = {correct: 0, answered: 0, total: 0};
        map[key].total++;
        map[key].answered += Number(hasAnswer);
        map[key].correct += Number(right);
      }
      return {id: question.id, chosen: hasAnswer ? chosen : null, correct: right};
    });
    return {correct, answered, total: questions.length, unanswered: questions.length - answered,
      percent: questions.length ? Math.round(correct / questions.length * 100) : 0,
      topics, parts, levels, items};
  }
  function secondsRemaining(deadline, now = Date.now()) {
    return deadline === null ? null : Math.max(0, Math.ceil((deadline - now) / 1000));
  }
  function formatTime(seconds) {
    if (seconds === null) return 'Untimed';
    return `${Math.floor(seconds / 3600).toString().padStart(2, '0')}:${Math.floor(seconds % 3600 / 60).toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
  }
  const api = {grade, secondsRemaining, formatTime};
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.MockExamCore = api;
})(typeof window !== 'undefined' ? window : globalThis);
