const { test, expect } = require('@playwright/test'); // Se debe llamar esto para los assertions

test.skip('Browser Context Playwright test', async ({ browser }) => {// Se tiene que poner entre brackets los fixtures de Playwright para que operen bien. Sin ellos
    //  funciona como string.


    // Context esta en la info de chrome plugins/ cookies
    const context = await browser.newContext()//Crea una nueva instancia del navegador esta es limpia, como si fuera incognito. Se pueden inyectar cookies.
    const page = await context.newPage(); // Crea la pagina

    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const signIn = page.locator('#signInBtn');
    const cardTitles = page.locator(".card-body a");

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
    // Formas de manejar cuando hay multiples elementos con un mismo locator.
    // console.log(await cardTitles.nth(0).textContent());
    // console.log(await cardTitles.first().textContent());
    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);


});

test.skip('Page Playwright test', async ({ page }) => {// Se tiene que poner entre brackets los fixtures de Playwright para que operen bien. Sin ellos funciona como string.
    await page.goto("https://google.com");
    // get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle('Google');


});

test("UI Controls", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
    const password = page.locator("[type='password']");
    const dropdown = page.locator("select.form-control");
    const userCheckmark = page.locator("span.radiotextsty").last();
    const signIn = page.locator('#signInBtn');
    const documentLink = page.locator("[href*='documents-request']"); //*= regular expression partial text
    const popupOkBtn = page.locator("#okayBtn");
    const termsCheckbox = page.locator("#terms");

    await dropdown.selectOption("consult");
    //   await page.pause(); // This opens the playwright inspector. It's like a debbuger.
    await userCheckmark.click()
    await popupOkBtn.click();
    console.log(await userCheckmark.isChecked()); // esta es una funcion que regresa un  boolean
    await expect(userCheckmark).toBeChecked();// assert for checkbox marked.
    await termsCheckbox.click();
    await expect(termsCheckbox).toBeChecked();
    await termsCheckbox.uncheck();
    expect(await termsCheckbox.isChecked()).toBeFalsy(); // it is  also exists toBeTruthy. The action is performed into the parenthesis, that's why the await is into the expect.
    await termsCheckbox.check();
    await expect(termsCheckbox).toBeChecked();
    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    // await page.pause();
});

test.only('Child windows handling', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");


    const [newPage] = Promise.all([
        context.waitForEvent('page'), // Este  metodo se queda esperando como listener a que alguna nueva ventana se abra para tomar el contexto y
        //  poder trabajar con el. De alguna manera es como el child window. Listn for any new page. Este metodo debe ejecutarse antes de que se ejecute el metodo 
        // que abre la nueva pagina. 
        await documentLink.click(), //  new page is opened
    ]);






})




