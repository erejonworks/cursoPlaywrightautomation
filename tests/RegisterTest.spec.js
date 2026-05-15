const { test, expect } = require('@playwright/test');

const email = `name${Date.now()}@example.com`;
const pwd = "Pwd123@456";
const fName = "Rahul";
const lName = "Sheety"
const mobileNumber = '9996785412';

test('Registration on the site', async ({ page }) => {



    // Locators
    // Login Form
    const signUpLink = page.locator("a[class='text-reset']");
    const loginEmailInput = page.locator("#userEmail");
    const inputPwd = page.locator("[type='password']");
    const signInbtn = page.locator("input[name='login']");

    // Sign up form
    const fNameInput = page.locator("#firstName");
    const lNameInput = page.locator("#lastName");
    const signUpEmail = page.locator("[type='email']");
    const userMobileInput = page.locator("#userMobile");
    const inputGender = page.locator('input[value="Male"]');
    const inputPwdSignUp = page.locator("#userPassword");
    const inputPwdSignUpConfirm = page.locator("#confirmPassword");
    const occupationSelector = page.locator("select[formcontrolname='occupation']");
    const over18checkbox = page.locator("input[type='checkbox']");
    const registerBtn = page.locator('#login')

    // Successful Registration
    const successHeader = page.locator('h1[class="headcolor"]');
    const successLoginBtn = page.locator('button[class="btn btn-primary"]');

    // Into the site
    const productCard = page.locator(".card");

    //Actions
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    console.log(await page.title());
    await expect(page).toHaveTitle("Let's Shop");

    // Registration
    await signUpLink.click();
    await fNameInput.fill(fName);
    await lNameInput.fill(lName);
    await signUpEmail.fill(email);
    await userMobileInput.fill(mobileNumber);
    await occupationSelector.selectOption({ index: 3 });
    await inputGender.click();
    await inputPwdSignUp.fill(pwd);
    await inputPwdSignUpConfirm.fill(pwd);
    await over18checkbox.click();
    await registerBtn.click();
    console.log(`Run > ${email}`);
    await expect(successHeader).toHaveText("Account Created Successfully");
    await successLoginBtn.click();

    //login
    await loginEmailInput.fill(email)
    await inputPwd.fill(pwd);
    await signInbtn.click();

    await expect(productCard.filter({ hasText: "Zara Coat" })).toBeVisible();
});
