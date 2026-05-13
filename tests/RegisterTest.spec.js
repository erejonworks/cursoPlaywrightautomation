const {test, expect} = require('@playwright/test');

test('Registration on the site', async({page}) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    
});
