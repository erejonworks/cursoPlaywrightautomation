const { test, expect } = require('@playwright/test'); // Se debe llamar esto para los assertions

test.only('Browser Context Playwright test', async ({ browser }) => {// Se tiene que poner entre brackets los fixtures de Playwright para que operen bien. Sin ellos
    //  funciona como string.


    // Context esta en la info de chrome plugins/ cookies
    const context = await browser.newContext()//Crea una nueva instancia del navegador esta es limpia, como si fuera incognito. Se pueden inyectar cookies.
    const page = await context.newPage(); // Crea la pagina

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator('#signInBtn');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(await page.title());
    // css, xpath 
    await username.fill("rahulsheety");
    await password.fill("learning");
    await signIn.click();
    console.log(await page.locator("[style*='block']").textContent()); // Extra el contenido de texto del elemento
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    await username.fill("");//Limpia el campo
    await username.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signIn.click();
});

test('Page Playwright test', async ({ page }) => {// Se tiene que poner entre brackets los fixtures de Playwright para que operen bien. Sin ellos funciona como string.
    await page.goto("https://google.com");
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');


});