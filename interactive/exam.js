(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const questions = window.MOCK_EXAM_DATA.questions;
  const core = window.MockExamCore;
  const key = 'ice409-mock-v1';
  const partNames = {1: 'Part I · Application', 2: 'Part II · Remembering',
    3: 'Part III · Application', 4: 'Part IV · Understanding'};
  const escape = text => String(text).replace(/[&<>"']/g, character =>
    ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character]));
  let attempt = null, ticker = null, storageAvailable = true;

  function validAttempt(value) {
    return value && value.version === 1 && ['active', 'submitted'].includes(value.status)
      && Number.isFinite(value.startedAt)
      && (value.deadline === null || Number.isFinite(value.deadline))
      && Number.isInteger(value.index) && value.index >= 0 && value.index < questions.length
      && value.answers && typeof value.answers === 'object'
      && value.flags && typeof value.flags === 'object'
      && value.optionOrders && questions.every(q => {
        const order = value.optionOrders[q.id];
        return Array.isArray(order) && order.length === q.choices.length
          && [...order].sort().join(',') === q.choices.map((_, i) => i).join(',');
      });
  }
  try {
    const stored = JSON.parse(localStorage.getItem(key) || 'null');
    if (validAttempt(stored)) attempt = stored;
  } catch { storageAvailable = false; }

  function persist() {
    try { localStorage.setItem(key, JSON.stringify(attempt)); }
    catch { storageAvailable = false; }
    $('exam-saved').textContent = storageAvailable
      ? 'Answers and flags saved in this browser. The timer continues across reloads.'
      : 'Storage unavailable. Keep this page open: answers cannot be restored after reload.';
  }
  function answeredCount() {
    return questions.filter(q => Number.isInteger(attempt.answers[q.id])
      && q.choices[attempt.answers[q.id]] !== undefined).length;
  }
  function start() {
    const minutes = Number($('exam-duration').value);
    const now = Date.now();
    attempt = {version: 1, status: 'active', startedAt: now,
      deadline: minutes ? now + minutes * 60000 : null, minutes,
      index: 0, answers: {}, flags: {}, optionOrders: {}};
    for (const question of questions) {
      attempt.optionOrders[question.id] = window.ReviewCore.shuffle(question.choices.map((_, i) => i));
    }
    persist();
    $('exam-setup').hidden = true;
    $('exam-results').hidden = true;
    $('exam-active').hidden = false;
    renderQuestion();
    startClock();
  }
  function checkExpiry() {
    if (attempt?.status === 'active' && core.secondsRemaining(attempt.deadline) === 0) {
      submit('Time expired');
      return true;
    }
    return false;
  }
  function updateClock() {
    if (!attempt || attempt.status !== 'active') return;
    const seconds = core.secondsRemaining(attempt.deadline);
    $('exam-timer').textContent = core.formatTime(seconds);
    $('exam-timer').parentElement.classList.toggle('urgent', seconds !== null && seconds <= 300);
    if (seconds !== null && seconds > 0 && seconds <= 300 && !attempt.warned) {
      attempt.warned = true;
      $('exam-announcement').textContent = 'Five minutes or less remain in your mock exam.';
      persist();
    }
    checkExpiry();
  }
  function startClock() {
    clearInterval(ticker);
    updateClock();
    if (attempt.status === 'active') ticker = setInterval(updateClock, 1000);
  }
  function renderMap() {
    const answered = answeredCount();
    const flagged = questions.filter(q => attempt.flags[q.id]).length;
    $('exam-map-summary').textContent = `${answered} answered · ${questions.length - answered} unanswered · ${flagged} flagged`;
    $('exam-progress').value = answered;
    $('exam-map').innerHTML = questions.map((q, i) => {
      const hasAnswer = Number.isInteger(attempt.answers[q.id]);
      const flag = Boolean(attempt.flags[q.id]);
      return `<button type="button" data-question="${i}" class="${hasAnswer ? 'answered ' : ''}${flag ? 'flagged ' : ''}${i === attempt.index ? 'current' : ''}" ${i === attempt.index ? 'aria-current="step"' : ''} aria-label="Question ${q.number}, ${hasAnswer ? 'answered' : 'unanswered'}${flag ? ', flagged' : ''}">${q.number}${flag ? '*' : ''}</button>`;
    }).join('');
  }
  function renderQuestion() {
    if (checkExpiry() || attempt.status !== 'active') return;
    const question = questions[attempt.index];
    $('exam-part').textContent = partNames[question.part];
    $('exam-step').textContent = `Question ${question.number} of ${questions.length}`;
    $('exam-prompt').textContent = question.prompt;
    $('exam-choices').innerHTML = '<legend class="sr-only">Choose one answer for this mock-exam item</legend>'
      + attempt.optionOrders[question.id].map((choiceIndex, position) =>
        `<label class="choice"><input type="radio" name="exam-answer" value="${choiceIndex}" ${attempt.answers[question.id] === choiceIndex ? 'checked' : ''}><span class="choice-letter" aria-hidden="true">${String.fromCharCode(65 + position)}</span><span>${escape(question.choices[choiceIndex])}</span></label>`).join('');
    $('exam-prev').disabled = attempt.index === 0;
    $('exam-next').textContent = attempt.index === questions.length - 1 ? 'Review & submit' : 'Next →';
    $('exam-clear').disabled = !Number.isInteger(attempt.answers[question.id]);
    $('exam-flag').setAttribute('aria-pressed', String(Boolean(attempt.flags[question.id])));
    $('exam-flag').textContent = attempt.flags[question.id] ? 'Flagged · remove flag' : 'Flag for review';
    renderMap();
    $('exam-prompt').focus({preventScroll: true});
  }
  function move(index) {
    if (!attempt || attempt.status !== 'active' || checkExpiry()) return;
    attempt.index = Math.max(0, Math.min(questions.length - 1, index));
    persist();
    renderQuestion();
  }
  function requestSubmission() {
    if (!attempt || attempt.status !== 'active' || checkExpiry()) return;
    const unanswered = questions.length - answeredCount();
    const flagged = questions.filter(q => attempt.flags[q.id]).length;
    $('exam-submit-summary').textContent = `${answeredCount()} answered, ${unanswered} unanswered and ${flagged} flagged out of ${questions.length} items.`;
    $('exam-submit-dialog').showModal();
  }
  function submit(reason = 'Submitted by you') {
    if (!attempt || attempt.status !== 'active') return;
    attempt.status = 'submitted';
    attempt.submittedAt = Date.now();
    attempt.reason = reason;
    clearInterval(ticker);
    if ($('exam-submit-dialog').open) $('exam-submit-dialog').close();
    persist();
    document.querySelector('[data-mode="exam"]').click();
    showResults();
  }
  function breakdownTable(map, names) {
    return '<table><thead><tr><th>Area</th><th>Correct</th><th>Unanswered</th><th>Score</th></tr></thead><tbody>'
      + Object.entries(map).map(([name, result]) => `<tr><th scope="row">${escape(names[name] || name)}</th><td>${result.correct} / ${result.total}</td><td>${result.total - result.answered}</td><td>${Math.round(result.correct / result.total * 100)}%</td></tr>`).join('') + '</tbody></table>';
  }
  function renderReview() {
    if (!attempt || attempt.status !== 'submitted') return;
    const result = core.grade(questions, attempt.answers);
    $('exam-review').innerHTML = questions.filter(q => !$('exam-mistakes-only').checked
      || !result.items.find(item => item.id === q.id).correct).map(q => {
      const answer = result.items.find(item => item.id === q.id);
      return `<details class="answer-review"><summary>${q.number}. ${answer.correct ? '✓ Correct' : answer.chosen === null ? 'Unanswered' : '↻ Incorrect'} · ${escape(q.prompt)}</summary><small>${escape(partNames[q.part])} · ${escape(window.ReviewCore.TOPICS[q.topic])}</small><p><strong>Your answer:</strong> ${answer.chosen === null ? 'No answer' : escape(q.choices[answer.chosen])}</p><p><strong>Correct answer:</strong> ${escape(q.choices[q.correct])}</p><p>${escape(q.explanation)}</p></details>`;
    }).join('') || '<p class="empty">No mistakes or unanswered questions in this attempt.</p>';
  }
  function showResults() {
    const result = core.grade(questions, attempt.answers);
    $('exam-setup').hidden = true;
    $('exam-active').hidden = true;
    $('exam-results').hidden = false;
    $('exam-score').textContent = `${result.percent}%`;
    $('exam-score-summary').textContent = `${result.correct} / ${result.total} points · ${result.answered} answered · ${result.unanswered} unanswered. Every selected exam item is included in the score.`;
    $('exam-completion').textContent = `${attempt.reason || 'Submitted'} · Elapsed ${core.formatTime(Math.max(0, Math.floor(((attempt.submittedAt || Date.now()) - attempt.startedAt) / 1000)))} · ${attempt.minutes ? attempt.minutes + '-minute allowance' : 'Untimed attempt'}. Mock-exam results are separate from practice-quiz progress.`;
    $('exam-topic-results').innerHTML = breakdownTable(result.topics, window.ReviewCore.TOPICS);
    $('exam-part-results').innerHTML = breakdownTable(result.parts, partNames);
    renderReview();
    $('exam-result-heading').focus({preventScroll: true});
  }
  $('start-exam').addEventListener('click', start);
  $('exam-choices').addEventListener('change', event => {
    if (attempt?.status !== 'active' || checkExpiry()) return;
    if (!event.target.matches('input[name="exam-answer"]')) return;
    attempt.answers[questions[attempt.index].id] = Number(event.target.value);
    $('exam-clear').disabled = false;
    persist();
    renderMap();
  });
  $('exam-prev').onclick = () => move(attempt.index - 1);
  $('exam-next').onclick = () => attempt.index === questions.length - 1 ? requestSubmission() : move(attempt.index + 1);
  $('exam-map').addEventListener('click', event => {
    const button = event.target.closest('button[data-question]');
    if (button) move(Number(button.dataset.question));
  });
  $('exam-flag').onclick = () => {
    if (attempt?.status !== 'active' || checkExpiry()) return;
    const id = questions[attempt.index].id;
    attempt.flags[id] = !attempt.flags[id];
    persist(); renderQuestion();
  };
  $('exam-clear').onclick = () => {
    if (attempt?.status !== 'active' || checkExpiry()) return;
    delete attempt.answers[questions[attempt.index].id];
    persist(); renderQuestion();
  };
  $('exam-submit').onclick = requestSubmission;
  $('exam-keep-working').onclick = () => $('exam-submit-dialog').close();
  $('exam-confirm-submit').onclick = () => { if (!checkExpiry()) submit(); };
  $('exam-mistakes-only').onchange = renderReview;
  $('exam-new').onclick = () => {
    $('exam-results').hidden = true;
    $('exam-active').hidden = true;
    $('exam-setup').hidden = false;
    $('start-exam').focus({preventScroll: true});
  };
  $('exam-export').onclick = () => {
    if (attempt?.status !== 'submitted') return;
    const result = core.grade(questions, attempt.answers);
    const report = {title: 'ICE 409 Mock Exam Results', completed: new Date(attempt.submittedAt).toISOString(),
      ...result, questions: questions.map(q => ({number: q.number, topic: window.ReviewCore.TOPICS[q.topic],
        question: q.prompt, yourAnswer: Number.isInteger(attempt.answers[q.id]) ? q.choices[attempt.answers[q.id]] : null,
        correctAnswer: q.choices[q.correct], explanation: q.explanation}))};
    const url = URL.createObjectURL(new Blob([JSON.stringify(report, null, 2)], {type: 'application/json'}));
    const link = document.createElement('a');
    link.href = url; link.download = 'ICE409_Mock_Exam_Results.json'; link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  document.addEventListener('visibilitychange', () => { if (!document.hidden) updateClock(); });
  if (attempt) {
    if (attempt.status === 'active') {
      document.querySelector('[data-mode="exam"]').click();
      $('exam-setup').hidden = true; $('exam-active').hidden = false;
      persist(); renderQuestion(); startClock();
    } else showResults();
  }
})();
