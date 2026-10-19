const {chromium} = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
(async () => {
  const executablePath=process.env.CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
  const browser=await chromium.launch({headless:true,executablePath});
  try {
    const context=await browser.newContext({viewport:{width:1280,height:1000}});
    const page=await context.newPage();const errors=[];
    page.on('pageerror',e=>errors.push(e.message));
    const base=process.env.BASE_URL||'http://127.0.0.1:8000';
    await page.goto(base);await page.click('[data-mode="exam"]');
    assert.equal(await page.locator('.filters').isVisible(),false);
    await page.click('#start-exam');
    assert.equal(await page.locator('#exam-map button').count(),97);
    assert.equal(await page.locator('#exam-timer').innerText(),'02:00:00');
    assert.equal(await page.locator('#exam-review').innerText(),'');
    assert.equal(await page.locator('#exam-choices .correct').count(),0);
    const bank=await page.evaluate(()=>window.MOCK_EXAM_DATA.questions);
    await page.check(`#exam-choices input[value="${bank[0].correct}"]`);
    await page.click('#exam-flag');
    await page.click('#exam-next');await page.click('#exam-next');
    const before=await page.evaluate(()=>JSON.parse(localStorage.getItem('ice409-mock-v1')));
    await page.reload();
    assert.equal(await page.locator('#exam-active').isVisible(),true);
    assert.match(await page.locator('#exam-step').innerText(),/Question 3/);
    const after=await page.evaluate(()=>JSON.parse(localStorage.getItem('ice409-mock-v1')));
    assert.equal(before.deadline,after.deadline);assert.equal(after.answers.m1,bank[0].correct);assert.equal(after.flags.m1,true);
    await page.click('#exam-map button[data-question="0"]');
    assert.equal(await page.locator('#exam-choices input:checked').inputValue(),String(bank[0].correct));
    await page.click('#exam-clear');assert.equal(await page.locator('#exam-choices input:checked').count(),0);
    await page.click('#exam-submit');assert.match(await page.locator('#exam-submit-summary').innerText(),/97 unanswered/);
    await page.click('#exam-keep-working');assert.equal(await page.locator('#exam-active').isVisible(),true);
    // Every item can be answered, revisited and graded without in-exam answer feedback.
    for(let i=0;i<bank.length;i++) {
      await page.locator(`#exam-map button[data-question="${i}"]`).click();
      await page.check(`#exam-choices input[value="${bank[i].correct}"]`);
    }
    assert.match(await page.locator('#exam-map-summary').innerText(),/97 answered · 0 unanswered/);
    await page.screenshot({path:'/tmp/ice409-mock-desktop.png',fullPage:true});
    await page.click('#exam-submit');await page.click('#exam-confirm-submit');
    assert.equal(await page.locator('#exam-score').innerText(),'100%');
    assert.match(await page.locator('#exam-score-summary').innerText(),/97 \/ 97/);
    assert.equal(await page.locator('#exam-review details').count(),97);
    await page.check('#exam-mistakes-only');assert.equal(await page.locator('#exam-review details').count(),0);
    const download=page.waitForEvent('download');await page.click('#exam-export');assert.equal((await download).suggestedFilename(),'ICE409_Mock_Exam_Results.json');
    // An untimed attempt supports skipped items and counts them as zero.
    await page.click('#exam-new');await page.selectOption('#exam-duration','0');await page.click('#start-exam');
    assert.equal(await page.locator('#exam-timer').innerText(),'Untimed');
    await page.check(`#exam-choices input[value="${(bank[0].correct+1)%4}"]`);
    await page.setViewportSize({width:390,height:844});
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    await page.screenshot({path:'/tmp/ice409-mock-mobile.png',fullPage:true});
    await page.click('#theme-toggle');assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    await page.click('#exam-submit');await page.click('#exam-confirm-submit');
    assert.equal(await page.locator('#exam-score').innerText(),'0%');
    assert.match(await page.locator('#exam-score-summary').innerText(),/96 unanswered/);
    // Restoring an expired attempt auto-submits once, preserves answers and locks editing.
    await page.click('#exam-new');await page.selectOption('#exam-duration','60');await page.click('#start-exam');
    await page.check(`#exam-choices input[value="${bank[0].correct}"]`);
    await page.evaluate(()=>{const s=JSON.parse(localStorage.getItem('ice409-mock-v1'));s.deadline=Date.now()-1000;localStorage.setItem('ice409-mock-v1',JSON.stringify(s));});
    await page.reload();assert.equal(await page.locator('#exam-results').isVisible(),true);
    assert.match(await page.locator('#exam-completion').innerText(),/Time expired/);
    assert.match(await page.locator('#exam-score-summary').innerText(),/1 \/ 97/);
    const submitted=await page.evaluate(()=>JSON.parse(localStorage.getItem('ice409-mock-v1')).submittedAt);
    await page.reload();await page.click('[data-mode="exam"]');
    assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('ice409-mock-v1')).submittedAt),submitted);
    assert.equal(await page.locator('#exam-active').isVisible(),false);
    assert.equal(await page.locator('#progress-number').innerText(),'0 / 56');
    assert.deepEqual(errors,[]);await context.close();
    // Live expiry also auto-submits while the confirmation dialog is open.
    const timed=await browser.newContext();const clockPage=await timed.newPage();
    await clockPage.clock.install();await clockPage.goto(base);await clockPage.click('[data-mode="exam"]');
    await clockPage.selectOption('#exam-duration','60');await clockPage.click('#start-exam');await clockPage.click('#exam-submit');
    await clockPage.clock.fastForward(3601000);
    assert.equal(await clockPage.locator('#exam-results').isVisible(),true);assert.equal(await clockPage.locator('#exam-submit-dialog').isVisible(),false);await timed.close();
    // The single-file document includes the mock bank and exam runtime offline.
    const offline=await browser.newContext({offline:true});const single=await offline.newPage();const singleErrors=[];
    single.on('pageerror',e=>singleErrors.push(e.message));
    await single.setContent(fs.readFileSync(path.resolve(__dirname,'../reviewers/ICE409_Interactive_Reviewer.html'),'utf8'));
    await single.click('[data-mode="exam"]');await single.click('#start-exam');
    assert.equal(await single.locator('#exam-map button').count(),97);
    await single.click('#exam-submit');await single.click('#exam-confirm-submit');
    assert.match(await single.locator('#exam-score-summary').innerText(),/97 unanswered/);assert.deepEqual(singleErrors,[]);await offline.close();
    // Storage policy failure must not prevent an in-session attempt.
    const blocked=await browser.newContext();await blocked.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked')};Storage.prototype.setItem=()=>{throw Error('blocked')};});
    const fallback=await blocked.newPage();await fallback.goto(base);await fallback.click('[data-mode="exam"]');await fallback.click('#start-exam');
    assert.match(await fallback.locator('#exam-saved').innerText(),/Storage unavailable/);await blocked.close();
    console.log('Mock-exam browser checks passed: all 97 answers, resume, flags, clear, navigation, hidden feedback, grading/export, unanswered scoring, live and restored timeout, separate quiz history, mobile/theme, blocked storage and offline standalone.');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
