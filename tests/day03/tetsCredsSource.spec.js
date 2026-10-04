import { test } from '@playwright/test';


test('Credentials sources based on different run', {tag: "@testCred"}, async ({ page }) => {
    console.log("User: ", process.env.APP_USER);
    console.log("User: ", process.env.APP_PASS);    
    console.log("User: ", process.env.BASE_URL);
});