// Option 1 - This is anothe way to do the import 
// {}  - > hold CTRL + SPACE --> this will show what can be imported 
// const {test} = require ("@playwright/test")


// Option 2 - to import 
// {}  - > hold CTRL + SPACE --> this will show what can be imported 
import {test} from '@playwright/test';


// test (); ---> needs 2 arguments
// "test description"              --- > description of test 
// async ({page}) =>  {}           ----> async callback
//      page --------------------------> fixture --> you can think of it as a driver (Similar to WebDriver drive in Selenium)
//                                               --> page fuxture has some reusable method to use for web based application 
test ("Simple Google Seach", async ({page}) => {


    // This is hard coded wait - DO NOT USE IT IN YOUR AUTOMATION
    // await page.waitForTimeout(3000); 


    // Becuase of the async nature of the laywright use the "await" keyword 
    await page.goto("https://www.google.com");

    // Declared a variable which stores WebElement that I located with XPath 
    // let searchBox = page.locator("//textarea[@aria-label='Search']"); 
    let searchBox = page.getByRole('combobox', { name: 'Search' });

    await page.waitForTimeout(3000); 

    await searchBox.fill("Playwright Automation"); 
    await page.waitForTimeout(3000); 

    await searchBox.press("Enter");
    await page.waitForTimeout(3000); 

});


test('YouTube search', async ({ page }) => {

    await page.goto("https://www.youtube.com")
    let searbox = page.getByRole('combobox', { name: 'Search' });
    await searbox.click(); 
    await searbox.fill("Minions")
    await page.waitForTimeout(3000); 

    await page.keyboard.press("Enter");
    await page.waitForTimeout(3000); 

    let firsResult = page.locator('img[src*="/vi/jbvdw4JKY0s/"]');
    firsResult.click();
    await page.waitForTimeout(7000); 


                            page.locator("(//a[@id='video-title'])[1]")
});