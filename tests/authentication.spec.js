// @ts-check
import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';

// Authentication Test Suite
test.describe('Authentication Module', () => {

    // Runs before every test
    test.beforeEach(async ({ page }) => {

        // Open ParaBank website
        await page.goto(
            'https://parabank.parasoft.com/parabank/index.htm'
        );
    });

    // =====================================================
    // TC01 - Valid Login
    // =====================================================

    test('TC01 - Valid Login', async ({ page }) => {

        // Create LoginPage object
        const login = new LoginPage(page);

        // Perform login
        await login.login('john', 'demo');

        // Wait until page fully loads
        await page.waitForLoadState('networkidle');

        // Verify user redirected successfully
        await expect(page)
            .toHaveURL(/overview/);
    });

    // =====================================================
    // TC02 - Invalid Username
    // =====================================================

    test('TC02 - Invalid Username', async ({ page }) => {

        const login = new LoginPage(page);

        // Enter wrong username
        await login.login('wrongUser', 'demo');

        // Wait for page load
        await page.waitForLoadState('networkidle');

        // Verify error message
        await expect(
            page.locator('.error')
        ).toContainText('could not be verified');
    });

    // =====================================================
    // TC03 - Invalid Password
    // =====================================================

    test('TC03 - Invalid Password', async ({ page }) => {

        const login = new LoginPage(page);

        // Enter wrong password
        await login.login('john', 'wrongPass');

        // Wait for page load
        await page.waitForLoadState('networkidle');

        // Verify error message
        await expect(
            page.locator('.error')
        ).toContainText('could not be verified');
    });

    // =====================================================
    // TC04 - Empty Username
    // =====================================================

    test('TC04 - Empty Username', async ({ page }) => {

        // Enter only password
        await page.locator('input[name="password"]')
            .fill('demo');

        // Click login
        await page.locator('input[value="Log In"]')
            .click();

        // Verify validation
        await expect(page.locator('body'))
            .toContainText('Please');
    });

    // =====================================================
    // TC05 - Empty Password
    // =====================================================

    test('TC05 - Empty Password', async ({ page }) => {

        // Enter only username
        await page.locator('input[name="username"]')
            .fill('john');

        // Click login
        await page.locator('input[value="Log In"]')
            .click();

        // Verify validation
        await expect(page.locator('body'))
            .toContainText('Please');
    });

    // =====================================================
    // TC06 - Empty Credentials
    // =====================================================

    test('TC06 - Empty Credentials', async ({ page }) => {

        // Click login directly
        await page.locator('input[value="Log In"]')
            .click();

        // Verify validation
        await expect(page.locator('body'))
            .toContainText('Please');
    });

    // =====================================================
    // TC07 - Logout Validation
    // =====================================================

    test('TC07 - Logout Validation', async ({ page }) => {

        const login = new LoginPage(page);

        // Login
        await login.login('john', 'demo');

        // Click logout
        await page.locator('text=Log Out')
            .click();

        // Verify login button visible again
        await expect(
            page.locator('input[value="Log In"]')
        ).toBeVisible();
    });

    // =====================================================
    // TC08 - Password Field Masking
    // =====================================================

    test('TC08 - Password Masking', async ({ page }) => {

        // Verify password field type=password
        await expect(
            page.locator('input[name="password"]')
        ).toHaveAttribute('type', 'password');
    });

    // =====================================================
    // TC09 - Login Button Visibility
    // =====================================================

    test('TC09 - Login Button Visibility', async ({ page }) => {

        // Verify login button visible
        await expect(
            page.locator('input[value="Log In"]')
        ).toBeVisible();
    });

    // =====================================================
    // TC10 - Username Field Visibility
    // =====================================================

    test('TC10 - Username Field Visibility', async ({ page }) => {

        // Verify username field visible
        await expect(
            page.locator('input[name="username"]')
        ).toBeVisible();
    });

    // =====================================================
    // TC11 - Password Field Visibility
    // =====================================================

    test('TC11 - Password Field Visibility', async ({ page }) => {

        // Verify password field visible
        await expect(
            page.locator('input[name="password"]')
        ).toBeVisible();
    });

    // =====================================================
    // TC12 - Page Title Validation
    // =====================================================

    test('TC12 - Page Title Validation', async ({ page }) => {

        // Verify page title
        await expect(page)
            .toHaveTitle(/ParaBank/);
    });

    // =====================================================
    // TC13 - Register Link Validation
    // =====================================================

    test('TC13 - Register Link Validation', async ({ page }) => {

        // Verify register link visible
        await expect(
            page.locator('text=Register')
        ).toBeVisible();
    });

    // =====================================================
    // TC14 - Forgot Login Info Link Validation
    // =====================================================

    test('TC14 - Forgot Login Info Link Validation', async ({ page }) => {

        // Verify forgot login info link visible
        await expect(
            page.locator('text=Forgot login info?')
        ).toBeVisible();
    });

    // =====================================================
    // TC15 - Home Page Load Validation
    // =====================================================

    test('TC15 - Home Page Load Validation', async ({ page }) => {

        // Verify homepage loads correctly
        await expect(
            page.locator('body')
        ).toContainText('Customer Login');
    });

});