const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const core = require('../interactive/exam-core.js');
const context = {window: {}};
vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname, '../interactive/mock-data.js'), 'utf8'), context);
const questions = JSON.parse(JSON.stringify(context.window.MOCK_EXAM_DATA.questions));
test('97 unique items follow the pointer ranges and assigned objectives', () => {
  assert.equal(questions.length, 97);
  assert.equal(new Set(questions.map(q => q.prompt)).size, 97);
  assert.deepEqual(questions.map(q => q.number), Array.from({length: 97}, (_, i) => i + 1));
  for (const q of questions) {
    assert.equal(q.choices.length, 4);
    assert.equal(new Set(q.choices).size, 4);
    assert.ok(q.choices[q.correct]);
    assert.ok(q.explanation.trim());
    const part = q.number <= 30 ? 1 : q.number <= 50 ? 2 : q.number <= 80 ? 3 : 4;
    assert.equal(q.part, part);
    assert.equal(q.level, [1, 3].includes(part) ? 'Apply' : part === 2 ? 'Remember' : 'Understand');
    const group = ['asme','iso','isa'].includes(q.topic) ? 'A' : ['docs','functional','sis'].includes(q.topic) ? 'B' : 'C';
    const n=q.number;
    const expected = n<=20?'B':n<=30?'C':n<=35?'A':n<=45?'B':n<=50?'C':n<=80?'A':n<=91?'C':'B';
    assert.equal(group, expected, `Question ${n} group`);
  }
});
test('grading counts unanswered as zero and aggregates topic, part and objective', () => {
  const full = Object.fromEntries(questions.map(q => [q.id, q.correct]));
  const result = core.grade(questions, full);
  assert.equal(result.correct, 97); assert.equal(result.percent, 100); assert.equal(result.unanswered, 0);
  assert.equal(result.parts[1].total, 30); assert.equal(result.parts[2].total, 20);
  assert.equal(result.parts[3].total, 30); assert.equal(result.parts[4].total, 17);
  assert.equal(result.levels.Apply.total, 60); assert.equal(result.levels.Remember.total, 20); assert.equal(result.levels.Understand.total, 17);
  assert.equal(Object.values(result.topics).reduce((n, t) => n+t.correct, 0), 97);
  delete full.m1; full.m2=(questions[1].correct+1)%4;
  const partial=core.grade(questions,full);
  assert.equal(partial.correct,95); assert.equal(partial.answered,96); assert.equal(partial.unanswered,1); assert.equal(partial.percent,98);
});
test('invalid or absent answer indices never earn points', () => {
  const result=core.grade(questions,{m1:99,m2:'2',m3:null});
  assert.equal(result.correct,0); assert.equal(result.answered,0); assert.equal(result.unanswered,97);
});
test('absolute deadline survives reload semantics and timer is clamped at zero', () => {
  assert.equal(core.secondsRemaining(100000, 40000),60);
  assert.equal(core.secondsRemaining(100000, 70000),30);
  assert.equal(core.secondsRemaining(100000, 100001),0);
  assert.equal(core.secondsRemaining(null, 40000),null);
  assert.equal(core.formatTime(7200),'02:00:00'); assert.equal(core.formatTime(65),'00:01:05'); assert.equal(core.formatTime(null),'Untimed');
});
