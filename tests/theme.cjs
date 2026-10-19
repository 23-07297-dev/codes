const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
(async()=>{
  const executablePath=process.env.CHROMIUM_PATH||(fs.existsSync('/usr/bin/chromium')?'/usr/bin/chromium':undefined);
  const browser=await chromium.launch({headless:true,executablePath});
  try {
    const context=await browser.newContext({viewport:{width:1280,height:960}});
    const page=await context.newPage();const errors=[];
    page.on('pageerror',error=>errors.push(error.message));
    await page.goto(process.env.BASE_URL||'http://127.0.0.1:8000');
    await page.waitForSelector('#theme-toggle');
    assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    assert.equal(await page.locator('body').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(16, 25, 30)');
    assert.equal(await page.locator('#theme-toggle').getAttribute('aria-pressed'),'true');
    // Toggling during a question preserves the selection, answer and progress.
    await page.click('#start-quiz');
    const prompt=await page.locator('#question-prompt').innerText();
    await page.check('input[name=answer][value="0"]');
    await page.locator('#theme-toggle').focus();await page.keyboard.press('Enter');
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    assert.equal(await page.locator('#question-prompt').innerText(),prompt);
    assert.equal(await page.locator('input[name=answer][value="0"]').isChecked(),true);
    await page.click('#check-answer');
    const progress=await page.locator('#progress-number').innerText();
    await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    assert.equal(await page.locator('#progress-number').innerText(),progress);
    await page.click('#theme-toggle');await page.reload();
    assert.equal(await page.locator('html').getAttribute('data-theme'),'dark');
    await page.click('#start-quiz');await page.check('input[name=answer][value="1"]');await page.click('#check-answer');
    assert.equal(await page.locator('.choice.wrong').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(69, 42, 44)');
    assert.equal(await page.locator('.choice.correct').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(25, 59, 48)');
    await page.click('[data-mode="cards"]');await page.click('#flip-card');
    assert.equal(await page.locator('#flashcard').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(26, 44, 48)');
    await page.click('[data-mode="reader"]');await page.click('#expand-all');
    await page.locator('.visual a').first().click();
    assert.equal(await page.locator('#visual-dialog').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(24, 35, 41)');
    await page.click('#close-visual');
    await page.click('[data-mode="quiz"]');await page.screenshot({path:'/tmp/ice409-dark-desktop.png',fullPage:true});
    for(const width of [320,390]){
      await page.setViewportSize({width,height:844});
      assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
    }
    await page.screenshot({path:'/tmp/ice409-dark-mobile.png',fullPage:true});
    await page.click('#theme-toggle');
    assert.equal(await page.locator('html').getAttribute('data-theme'),'light');
    assert.deepEqual(errors,[]);await context.close();
    // Appearance controls still work when storage is blocked.
    const blocked=await browser.newContext();
    await blocked.addInitScript(()=>{Storage.prototype.getItem=()=>{throw Error('blocked')};Storage.prototype.setItem=()=>{throw Error('blocked')};});
    const fallback=await blocked.newPage();await fallback.goto(process.env.BASE_URL||'http://127.0.0.1:8000');
    assert.equal(await fallback.locator('html').getAttribute('data-theme'),'dark');
    await fallback.click('#theme-toggle');assert.equal(await fallback.locator('html').getAttribute('data-theme'),'light');await blocked.close();
    const offline=await browser.newContext({offline:true});const single=await offline.newPage();const singleErrors=[];
    single.on('pageerror',e=>singleErrors.push(e.message));
    await single.setContent(fs.readFileSync(path.resolve(__dirname,'../reviewers/ICE409_Interactive_Reviewer.html'),'utf8'));
    assert.equal(await single.locator('html').getAttribute('data-theme'),'dark');
    await single.click('#theme-toggle');assert.equal(await single.locator('html').getAttribute('data-theme'),'light');
    assert.deepEqual(singleErrors,[]);await offline.close();
    console.log('Theme checks passed: dark default, keyboard toggle, reload persistence, unchanged quiz progress, feedback/cards/dialog colors, mobile layout, blocked storage and standalone offline.');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
