// @ts-check

import { test, expect }from '@playwright/test';
import AccountPage from '../pages/AccountPage';
import accountData from '../test-data/accountServicesData.json';
import { baseURL, navigationTimeout } from '../config/test-config.js';

test.describe(
    'Account Services Module',() => {

        test.beforeEach(async ({ page }) => {

                 await page.goto( accountData.url || `${baseURL}/index.htm`, {
                     waitUntil: 'networkidle',
                     timeout: navigationTimeout
                 });
            }
        );

        // =================================================
        // TC01 Username Field Visibility
        // =================================================

        test('TC01 - Username Field Visibility',

            {
                tag: '@smoke'
            },

            async ({ page }) => {

                const account = new AccountPage(page);

                await expect(account.username).toBeVisible();
            }
        );

        // =================================================
        // TC02 Password Field Visibility
        // =================================================

        test('TC02 - Password Field Visibility', async ({ page }) => {

                const account = new AccountPage(page);

                await expect( account.password ).toBeVisible();
            }
        );

        // =================================================
        // TC03 Login Button Visibility
        // =================================================

        test('TC03 - Login Button Visibility',async ({ page }) => {

                const account =  new AccountPage(page);

                await expect( account.loginButton ).toBeVisible();
            }
        );

        // =================================================
        // TC04 Register Link Visibility
        // =================================================

        test('TC04 - Register Link Visibility',async ({ page }) => {

                const account = new AccountPage(page);

                await expect( account.registerLink).toBeVisible();
            }
        );

        // =================================================
        // TC05 Forgot Login Visibility
        // =================================================

        test('TC05 - Forgot Login Visibility', async ({ page }) => {

                const account = new AccountPage(page);

                await expect( account.forgotLogin).toBeVisible();
            }
        );

        // =================================================
        // TC06 Page Title Validation
        // =================================================

        test( 'TC06 - Page Title Validation',

            {
                tag: '@regression'
            },

            async ({ page }) => {

                await expect(page).toHaveTitle(new RegExp(accountData.pageTitle ));
            }
        );

        // =================================================
        // TC07  Customer Login Text
        // =================================================

        test('TC07 - Customer Login Text', async ({ page }) => {

                const account = new AccountPage(page);

                await expect(account.body).toContainText(  accountData.homePageText );
            }
        );

        // =================================================
        // TC08 Login with Valid Credentials
        // =================================================

        test('TC08 - Login with Valid Credentials',async ({ page }) => {

                const account = new AccountPage(page);

                await account.login(
                    accountData.validUser.username,
                    accountData.validUser.password
                );

                await expect(page).toHaveURL(/overview/);
            }
        );

        // =================================================
        // TC09 Register Navigation
        // =================================================

        test('TC09 - Register Navigation', async ({ page }) => {

                const account = new AccountPage(page);

                await account.registerLink .click();

                await expect(page).toHaveURL(new RegExp(accountData.registerURL ) );
                   
            }
        );

        // =================================================
        // TC10 Forgot Login Navigation
        // =================================================

       test('TC10 - Forgot Login Navigation', async ({ page }) => {

                const account = new AccountPage(page);

                await account.forgotLogin .click();

                await expect(page)  .toHaveURL(/lookup/);
            }
        );

        // =================================================
        // TC11  Username Enabled
        // =================================================

        test('TC11 - Username Enabled',  async ({ page }) => {

                const account = new AccountPage(page);

                await expect( account.username).toBeEnabled();
            }
        );

        // =================================================
        // TC12 Password Enabled
        // =================================================

        test.skip('TC12 - Password Enabled', async ({ page }) => {

                const account = new AccountPage(page);

                await expect(account.password ).toBeEnabled();
            }
        );

        // =================================================
        // TC13  Login Button Enabled
        // =================================================

        test('TC13 - Login Button Enabled',async ({ page }) => {

                const account = new AccountPage(page);

                await expect( account.loginButton).toBeEnabled();
            }
        );

        // =================================================
        // TC14 Register Link Enabled
        // =================================================

        test('TC14 - Register Link Enabled',async ({ page }) => {

                const account =new AccountPage(page);

                await expect(account.registerLink ).toBeEnabled();
            }
        );

        // =================================================
        // TC15 Home Page URL Validation
        // =================================================

        test('TC15 - Home Page URL Validation',

            {
                tag: '@smoke'
            },

            async ({ page }) => {

                await expect(page).toHaveURL(new RegExp(  accountData.homePageURL ) );
            }
        );
    }
);