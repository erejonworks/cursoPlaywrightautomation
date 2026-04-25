const { test, expect } = require('@playwright/test'); // Se debe llamar esto para los assertions

test.only('Browser Context Playwright test', async ({ browser }) => {// Se tiene que poner entre brackets los fixtures de Playwright para que operen bien. Sin ellos funciona como string.

    // Context esta en la info de chrome plugins/ cookies
    const context = await browser.newContext()//Crea una nueva instancia del navegador. Se pueden inyectar cookies.
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
});

test('Page Playwright test', async ({ page }) => {// Se tiene que poner entre brackets los fixtures de Playwright para que operen bien. Sin ellos funciona como string.
    await page.goto("https://google.com");
    // get title - assertion
    console.log(await page.title());
    await expect (page).toHaveTitle('Google');


});