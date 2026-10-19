(function (root) {
  'use strict';
  const TOPICS = {asme:'ASME & process piping',iso:'ISO & quality management',isa:'ISA 5.1 & instrument tags',docs:'Instrumentation documents',functional:'IEC 61508 functional safety',sis:'IEC 61511 & SIS',hazard:'Hazardous areas & protection',install:'Electrical & instrument installation'};
  function filterQuestions(items, topic, level) { return items.filter(q => (topic === 'all' || q.topic === topic) && (level === 'all' || q.level === level)); }
  function shuffle(items, random = Math.random) { const result = [...items]; for (let i=result.length-1;i>0;i--) {const j=Math.floor(random()*(i+1)); [result[i],result[j]]=[result[j],result[i]];} return result; }
  function summarize(answers, total) { const correct=answers.filter(a=>a.correct).length; return {correct,answered:answers.length,total,percent:total?Math.round(correct/total*100):0,unanswered:Math.max(0,total-answers.length)}; }
  function updateHistory(history, id, correct) { const old=history[id] || {attempts:0,correct:0}; return {...history,[id]:{attempts:old.attempts+1,correct:old.correct+(correct?1:0),lastCorrect:correct}}; }
  const api={TOPICS,filterQuestions,shuffle,summarize,updateHistory};
  if(typeof module!=='undefined' && module.exports) module.exports=api; else root.ReviewCore=api;
})(typeof window!=='undefined'?window:globalThis);
