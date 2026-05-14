const {test, expect} = require('@playwright/test');

test('Registration on the site', async({page}) => {

     // Locators
    // Login Form
    const signUpLink = page.locator("a[class='text-reset']");
    const inputEmail = page.locator("#userEmail");
    const inputPwd = page.locator("[type='password']");
    const btnSignIn = page.locator("input[name='login']");
    // Sign up form
    const fName = page.locator("#firstName");
    const lName = page.locator("#lastName");
    const signUpEmail = page.locator("[type='email']");
    const inputUserMobile = page.locator("#userMobile");
    const inputGender = page.locator('input[value="Male"]');
    const inputpwd = page.locator("#userPassword");
    const inputpwdconfirm = page.locator("#confirmPassword");
    const = page.locator("");
    const = page.locator("");

    //Actions
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    // Registration
    await signUpLink.click();
    await

    //login
    await inputEmail.fill("")
});
