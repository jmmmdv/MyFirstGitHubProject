const {test, expect} = require('@playwright/test');

test.only ('Page Playwright test', async({page})=> {
    await page.goto("https://google.com");
    
    // get title -assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});