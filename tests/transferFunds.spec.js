import { test, expect } from '@playwright/test';
import { TransferPage } from '../pages/TransferPage';

test.describe.parallel('Transfer Funds Module - 15 Test Cases', () => {

    let transferPage;

    // =====================================================
    // BEFORE EACH - LOGIN (NO FIXTURES)
    // =====================================================
    test.beforeEach(async ({ page }) => {

        await page.goto('https://parabank.parasoft.com/parabank/index.htm', {
            waitUntil: 'domcontentloaded'
        });

        // LOGIN
        await page.locator('input[name="username"]').fill('john');
        await page.locator('input[name="password"]').fill('demo');
        await page.locator('input[value="Log In"]').click();

        await page.waitForURL('**/overview.htm', { timeout: 15000 });

        transferPage = new TransferPage(page);

        await transferPage.openTransferPage();

        await page.waitForLoadState('domcontentloaded');
    });

    // =====================================================
    // UI TEST CASES (1–5)
    // =====================================================

    test('TC01 - Transfer page URL validation', async ({ page }) => {
        await expect(page).toHaveURL(/transfer/);
    });

    test('TC02 - Amount field visible', async () => {
        await expect(transferPage.amountInput).toBeVisible();
    });

    test('TC03 - From account visible', async () => {
        await expect(transferPage.fromAccount).toBeVisible();
    });

    test('TC04 - To account visible', async () => {
        await expect(transferPage.toAccount).toBeVisible();
    });

    test('TC05 - Transfer button visible', async () => {
        await expect(transferPage.transferButton).toBeVisible();
    });

    // =====================================================
    // FUNCTIONAL TEST CASES (6–10)
    // =====================================================

    test('TC06 - Enter amount works', async () => {
        await transferPage.enterAmount('100');
        await expect(transferPage.amountInput).toHaveValue('100');
    });

    test('TC07 - Account selection works', async () => {
        await transferPage.selectAccounts();
        await expect(transferPage.fromAccount).toBeVisible();
    });

    test('TC08 - Successful transfer', async ({ page }, testInfo) => {
        try {
            await transferPage.transferFunds('50');
            await expect(transferPage.successMessage).toBeVisible();

        } catch (error) {
            await page.screenshot({
                path: `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,
                fullPage: true
            });
            throw error;
        }
    });

    test('TC09 - Minimum transfer', async () => {
        await transferPage.transferFunds('1');
        await expect(transferPage.successMessage).toBeVisible();
    });

    test('TC10 - Large transfer', async () => {
        await transferPage.transferFunds('5000');
        await expect(transferPage.successMessage).toBeVisible();
    });

    // =====================================================
    // NEGATIVE TEST CASES (11–13)
    // =====================================================

    test('TC11 - Empty amount validation', async ({ page }, testInfo) => {
        try {
            await transferPage.clickTransfer();
            await expect(transferPage.errorMessage).toBeVisible();

        } catch (error) {
            await page.screenshot({
                path: `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,
                fullPage: true
            });
            throw error;
        }
    });

    test('TC12 - Invalid amount (text)', async ({ page }, testInfo) => {
        try {
            await transferPage.enterAmount('abc');
            await transferPage.clickTransfer();
            await expect(transferPage.errorMessage).toBeVisible();

        } catch (error) {
            await page.screenshot({
                path: `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,
                fullPage: true
            });
            throw error;
        }
    });

    test('TC13 - Same account transfer validation', async ({ page }, testInfo) => {
        try {
            await transferPage.fromAccount.selectOption({ index: 0 });
            await transferPage.toAccount.selectOption({ index: 0 });

            await transferPage.enterAmount('100');
            await transferPage.clickTransfer();

            await expect(transferPage.errorMessage).toBeVisible();

        } catch (error) {
            await page.screenshot({
                path: `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,
                fullPage: true
            });
            throw error;
        }
    });

    // =====================================================
    // EDGE TEST CASES (14–15)
    // =====================================================

    test('TC14 - Page title validation', async ({ page }) => {
        await expect(page).toHaveTitle(/ParaBank/);
    });

    test('TC15 - Form container visible', async () => {
        await expect(transferPage.formContainer).toBeVisible();
    });

});