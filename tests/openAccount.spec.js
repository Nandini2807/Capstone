// @ts-check

import { test, expect }from '@playwright/test';
import OpenAccountPage from '../pages/OpenAccountPage';
import openAccountData from '../test-data/openAccountData.json';
import { baseURL, navigationTimeout, elementTimeout } from '../config/test-config.js';



test.describe.parallel(
    'Open Account Module',() => {
     test.beforeEach(async ({ page }) => {

                await page.goto(
                    `${baseURL}/index.htm`,
                    {
                        waitUntil:
                        'networkidle',
                        timeout: navigationTimeout
                    }
                );

                // Login using JSON Data
                await page.locator('input[name="username"]').fill(
                    openAccountData
                    .validUser
                    .username,
                    { timeout: elementTimeout }
                );

                await page.locator(
                    'input[name="password"]').fill(
                    openAccountData
                    .validUser
                    .password,
                    { timeout: elementTimeout }
                );

                // Click Login
                await page.locator('input[value="Log In"]' ).click({ timeout: elementTimeout });

                // Wait for successful login
            await page.waitForURL( '**/overview.htm',
                    {
                        timeout: navigationTimeout
                    }
                );
            }
        );

        // =====================================================
        // SCREENSHOT ON FAILURE
        // =====================================================

        test.afterEach( async ({ page }, testInfo) => {

                if (
                    testInfo.status !==
                    testInfo.expectedStatus
                ) {

                    await page.screenshot({

                        path:
                        `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,

                        fullPage: true
                    });
                }
            }
        );

        // =====================================================
        // TC01 Open Savings Account
        // =====================================================

        test('TC01 - Open Savings Account',async ({ page }) => {
      
            const account = new OpenAccountPage(page);
            await account.openNewAccount(
                    openAccountData
                    .accountType
                    .savings
                );

                await account.verifyAccountOpened();
            }
        );

        // =====================================================
        // TC02 Open Current Account
        // =====================================================

        test('TC02 - Open Current Account', async ({ page }) => {

                const account = new OpenAccountPage(page);

                await account.openNewAccount(
                    openAccountData
                    .accountType
                    .current
                );

                await account.verifyAccountOpened();
            }
        );

        // =====================================================
        // TC03 Account Type Dropdown Validation
        // =====================================================

        test( 'TC03 - Account Type Dropdown Validation', async ({ page }) => {

                const account =  new OpenAccountPage(page);

                await account.gotoOpenAccountPage();

                await expect(account.accountTypeDropdown).toBeVisible();
            }
        );

        // =====================================================
        // TC04 Multiple Accounts Creation
        // =====================================================

        test('TC04 - Multiple Accounts Creation', async ({ page }) => {

                const account = new OpenAccountPage(page);

                await account.openNewAccount(
                    openAccountData
                    .accountType
                    .savings
                );

                await account.verifyAccountOpened();

                await account.openNewAccount(
                    openAccountData
                    .accountType
                    .current
                );

                await account.verifyAccountOpened();
            }
        );

        // =====================================================
        // TC05 Account Number Visibility
        // =====================================================

    test('TC05 - Account Number Visibility',async ({ page }) => {

    const account = new OpenAccountPage(page);

       
        await account.openNewAccount(
            openAccountData
                .accountType
                .savings
        );

        await expect( account.newAccountNumber ).toBeVisible({ timeout: 20000 });
    }
);

        // =====================================================
        // TC06 Open Account Workflow
        // =====================================================

        test( 'TC06 - Open Account Workflow', async ({ page }) => {

                const account =  new OpenAccountPage(page);

                await account.gotoOpenAccountPage();

                await account.selectAccountType(
                    openAccountData
                    .accountType
                    .savings
                );

                await account.clickOpenAccountButton();

                await account.verifyAccountOpened();
            }
        );

        // =====================================================
        // TC07   Open Account Page Validation
        // =====================================================

        test( 'TC07 - Open Account Page Validation', async ({ page }) => {

                const account = new OpenAccountPage(page);

                await account.gotoOpenAccountPage();

                await expect(page.locator('body') ).toContainText('Open New Account' );
            }
        );

        // =====================================================
        // TC08 Session Persistence Validation
        // =====================================================


       test('TC08 - Session Persistence Validation',  async ({ page }) => {

        const account = new OpenAccountPage(page);

        await account.gotoOpenAccountPage();

        await page.reload();

        await expect( account.openAccountButton ).toBeVisible({ timeout: 20000});
    }
);
       

        // =====================================================
        // TC09 Open Account Button Visibility
        // =====================================================

       
      test('TC09 - Open Account Button Visibility',async ({ page }) => {

        const account = new OpenAccountPage(page);

        await account.gotoOpenAccountPage();

        await expect(account.openAccountButton  ).toBeVisible({ timeout: 15000  });
    }
);
        
        // =====================================================
        // TC10 From Account Dropdown Validation
        // =====================================================

        test('TC10 - From Account Dropdown Validation', async ({ page }) => {

                const account = new OpenAccountPage(page);

                await account.gotoOpenAccountPage();

                await expect(account.fromAccountDropdown  ).toBeVisible();
            }
        );

        // =====================================================
        // TC11 Savings Account Synchronization
        // =====================================================

     test( 'TC11 - Savings Account Synchronization', async ({ page }) => {

        const account =  new OpenAccountPage(page);

        await account.openNewAccount(
            openAccountData
                .accountType
                .savings
        );

        await expect( account.successMessage ).toContainText( 'Congratulations',
            {
                timeout: 20000
            }
        );
    }
);

        // =====================================================
        // TC12 Current Account Synchronization
        // =====================================================



    test('TC12 - Current Account Synchronization',async ({ page }) => {

        const account = new OpenAccountPage(page);

        await account.openNewAccount(
            openAccountData
                .accountType
                .current
        );

        await expect(account.successMessage).toContainText('Congratulations',
            {
                timeout: 20000
            }
        );
    }
);
        // =====================================================
        // TC13  UI Validation
        // =====================================================


     test('TC13 - UI Validation',async ({ page }) => {

        const account = new OpenAccountPage(page);

        await account.gotoOpenAccountPage();

        await expect(account.rightPanel ).toBeVisible({
            timeout: 15000
        });
    }
);

        // =====================================================
        // TC14  New Account ID Validation
        // =====================================================


test('TC14 - New Account ID Validation', async ({ page }) => {

        const account =new OpenAccountPage(page);

        await account.openNewAccount(
            openAccountData
                .accountType
                .savings
        );

        await expect(account.newAccountNumber ).toBeVisible({
            timeout: 20000
        });
    }
);

        // =====================================================
        // TC15  Open Account Navigation Validation
        // =====================================================

        test( 'TC15 - Open Account Navigation Validation', async ({ page }) => {

                const account = new OpenAccountPage(page);

                await account.gotoOpenAccountPage();

                await expect(page).toHaveURL( /openaccount.htm/);
            }
        );
    }
);