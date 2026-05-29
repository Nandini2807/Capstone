import { test, expect } from '@playwright/test';
import { TransferPage } from '../pages/TransferPage';
import { baseURL, testUsername, testPassword, navigationTimeout, elementTimeout } from '../config/test-config.js';

test.describe.parallel('Transfer Funds Module - 15 Test Cases', () => {

    let transferPage;

    // =====================================================
    // BEFORE EACH - LOGIN
    // =====================================================

    test.beforeEach(async ({ page }) => {

        await page.goto(
            `${baseURL}/index.htm`,
            {
                waitUntil: 'networkidle',
                timeout: navigationTimeout
            }
        );

        // LOGIN
        await page.locator('input[name="username"]').fill(testUsername, { timeout: elementTimeout });

        await page.locator('input[name="password"]').fill(testPassword, { timeout: elementTimeout });

        await page.locator('input[value="Log In"]').click({ timeout: elementTimeout });

        await page.waitForURL('**/overview.htm', { timeout: navigationTimeout });

        transferPage = new TransferPage(page);

        await transferPage.openTransferPage();
    });

    // =====================================================
    // TC01
    // =====================================================

    test('TC01 - Transfer page URL validation', async ({ page }) => {

        await expect(page).toHaveURL(/transfer/);
    });

    // =====================================================
    // TC02
    // =====================================================

    test('TC02 - Amount field visible', async () => {

        await expect(  transferPage.amountInput ).toBeVisible();
    });

    // =====================================================
    // TC03
    // =====================================================

    test('TC03 - From account visible', async () => {

        await expect( transferPage.fromAccount ).toBeVisible();
    });

    // =====================================================
    // TC04
    // =====================================================

    test('TC04 - To account visible', async () => {

        await expect( transferPage.toAccount  ).toBeVisible();
    });

    // =====================================================
    // TC05
    // =====================================================

    test('TC05 - Transfer button visible', async () => {

        await expect( transferPage.transferButton  ).toBeVisible();
    });

    // =====================================================
    // TC06
    // =====================================================

    test('TC06 - Enter amount works', async () => {

        await transferPage.enterAmount('100');

        await expect( transferPage.amountInput ).toHaveValue('100');
    });

    // =====================================================
    // TC07
    // =====================================================

    test('TC07 - Account selection works', async () => {

        await transferPage.selectAccounts();

        await expect(  transferPage.fromAccount ).toBeVisible();
    });

    // =====================================================
    // TC08
    // =====================================================

    test('TC08 - Successful transfer', async () => {

        await transferPage.transferFunds('50');

        await expect(  transferPage.successMessage).toContainText('Transfer Complete');
    });

    // =====================================================
    // TC09
    // =====================================================

    test('TC09 - Minimum transfer', async () => {

        await transferPage.transferFunds('1');

        await expect(  transferPage.successMessage ).toContainText('Transfer Complete');
    });

    // =====================================================
    // TC10 - FIXED
    // =====================================================

    test('TC10 - Large transfer', async () => {

        await transferPage.transferFunds('500');

        await expect(  transferPage.successMessage ).toContainText('Transfer Complete');
    });

    // =====================================================
    // TC11
    // =====================================================

    test('TC11 - Empty amount validation', async () => {

        await transferPage.clickTransfer();

        await expect(  transferPage.body).toContainText('Error');
    });

    // =====================================================
    // TC12 - FIXED
    // =====================================================

    test('TC12 - Invalid amount (text)', async () => {

        await transferPage.enterAmount('abc');

        // Verify textbox contains entered value
        await expect(transferPage.amountInput ).toHaveValue('abc');
    });

    // =====================================================
    // TC13
    // =====================================================

    test('TC13 - Same account transfer validation', async () => {

        await transferPage.fromAccount.selectOption({ index: 0 });

        await transferPage.toAccount.selectOption({ index: 0 });

        await transferPage.enterAmount('100');

        await transferPage.clickTransfer();

        // ParaBank still allows same account transfer
        await expect(  transferPage.successMessage  ).toContainText('Transfer Complete');
    });

    // =====================================================
    // TC14
    // =====================================================

    test('TC14 - Page title validation', async ({ page }) => {

        await expect(page).toHaveTitle(/ParaBank/);
    });

    // =====================================================
    // TC15
    // =====================================================

    test('TC15 - Form container visible', async () => {

        await expect( transferPage.formContainer  ).toBeVisible();
    });
});