// @ts-check

import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import loginData from '../test-data/loginData.json';
import { baseURL, navigationTimeout } from '../config/test-config.js';

test.describe('Authentication Module', () => {

    // =====================================================
    // BEFORE EACH
    // =====================================================

    test.beforeEach(async ({ page }) => {

        await page.goto(
            `${baseURL}/index.htm`,
            { waitUntil: 'networkidle', timeout: navigationTimeout }
        );
    });

    // =====================================================
    // SCREENSHOT ON FAILURE
    // =====================================================

    test.afterEach(async ({ page }, testInfo) => {

        if (testInfo.status !== testInfo.expectedStatus) {

            await page.screenshot({

                path:
                `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,

                fullPage: true
            });
        }
    });

    // =====================================================
    // TC01 - VALID LOGIN
    // =====================================================

    test('TC01 - Valid Login', async ({ page }) => {

        const login = new LoginPage(page);

        await login.login(

            loginData.validUser.username,

            loginData.validUser.password
        );

        await expect(page).toHaveURL(/overview/);
    });

   // =====================================================
// TC02 - INVALID USERNAME
// =====================================================
   
test('TC02 - Invalid Username', async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.invalidUsername.username,
        loginData.invalidUsername.password
    );

    await expect(login.errorMessage) .toBeVisible({ timeout: 10000 });

    await expect(login.errorMessage) .toContainText('could not be verified');
});







// =====================================================
// TC03 - INVALID PASSWORD
// =====================================================
     
   test('TC03 - Invalid Password', async ({ page }) => {

    const login = new LoginPage(page);

    await login.login(
        loginData.invalidPassword.username,
        loginData.invalidPassword.password
    );

    await expect(login.errorMessage)  .toBeVisible({ timeout: 10000 });

    await expect(login.errorMessage) .toContainText('could not be verified');
});

 // =====================================================
    // TC04 - EMPTY USERNAME
    // =====================================================

    test('TC04 - Empty Username', async ({ page }) => {

        const login = new LoginPage(page);

        await login.enterPassword(
            loginData.emptyUsername.password
        );

        await login.clickLoginButton();

        await expect(login.validationMessage)
            .toContainText('Please');
    });

    // =====================================================
    // TC05 - EMPTY PASSWORD
    // =====================================================

    test('TC05 - Empty Password', async ({ page }) => {

        const login = new LoginPage(page);

        await login.enterUsername(
            loginData.emptyPassword.username
        );

        await login.clickLoginButton();

        await expect(login.validationMessage)
            .toContainText('Please');
    });

    // =====================================================
    // TC06 - EMPTY CREDENTIALS
    // =====================================================

    test('TC06 - Empty Credentials', async ({ page }) => {

        const login = new LoginPage(page);

        await login.clickLoginButton();

        await expect(login.validationMessage)
            .toContainText('Please');
    });

    // =====================================================
    // TC07 - LOGOUT
    // =====================================================

    test('TC07 - Logout Validation', async ({ page }) => {

        const login = new LoginPage(page);

        await login.login(

            loginData.validUser.username,

            loginData.validUser.password
        );

        await login.logout();

        await expect(login.loginButton)
            .toBeVisible();
    });

    // =====================================================
    // TC08 - PASSWORD MASKING
    // =====================================================

    test('TC08 - Password Masking', async ({ page }) => {

        const login = new LoginPage(page);

        await expect(login.passwordTextBox)
            .toHaveAttribute('type', 'password');
    });

    // =====================================================
    // TC09 - LOGIN BUTTON VISIBLE
    // =====================================================

    test('TC09 - Login Button Visibility', async ({ page }) => {

        const login = new LoginPage(page);

        await expect(login.loginButton)
            .toBeVisible();
    });

    // =====================================================
    // TC10 - USERNAME FIELD VISIBLE
    // =====================================================

    test('TC10 - Username Field Visibility', async ({ page }) => {

        const login = new LoginPage(page);

        await expect(login.usernameTextBox)
            .toBeVisible();
    });

    // =====================================================
    // TC11 - PASSWORD FIELD VISIBILITY
    // =====================================================

    test('TC11 - Password Field Visibility', async ({ page }) => {

        const login = new LoginPage(page);

        await expect(login.passwordTextBox)
            .toBeVisible();
    });

    // =====================================================
    // TC12 - PAGE TITLE VALIDATION
    // =====================================================

    test('TC12 - Page Title Validation', async ({ page }) => {

        await expect(page)
            .toHaveTitle(/ParaBank/);
    });

    // =====================================================
    // TC13 - REGISTER LINK VALIDATION
    // =====================================================

    test('TC13 - Register Link Validation', async ({ page }) => {

        await expect(
            page.locator('text=Register')
        ).toBeVisible();
    });

    // =====================================================
    // TC14 - FORGOT LOGIN INFO LINK
    // =====================================================

    test('TC14 - Forgot Login Info Link Validation', async ({ page }) => {

        await expect(
            page.locator('text=Forgot login info?')
        ).toBeVisible();
    });

    // =====================================================
    // TC15 - HOME PAGE LOAD VALIDATION
    // =====================================================

    test( 'TC15 - Home Page Load Validation',

        {
            tag: '@smoke'
        },

        async ({ page }) => { await expect(page.locator('body'))
                .toContainText('Customer Login');
        }
    );
});