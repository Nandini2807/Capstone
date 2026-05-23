// @ts-check

// Import Playwright
import { test, expect } from '@playwright/test';

// =====================================================
// Account Services Module
// =====================================================

test.describe('Account Services Module', () => {

    // =====================================================
    // Before Each Hook
    // =====================================================

    test.beforeEach(async ({ page }) => {

        // Open ParaBank Website
        await page.goto(
            'https://parabank.parasoft.com/parabank/index.htm'
        );
    });

    // =====================================================
    // TC01 - Username Field Visibility
    // =====================================================

    test(
        'TC01 - Username Field Visibility',

        {
            tag: '@smoke'
        },

        async ({ page }) => {

            // Verify Username textbox visible
            await expect(
                page.locator(
                    'input[name="username"]'
                )
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC02 - Password Field Visibility
    // =====================================================

    test(
        'TC02 - Password Field Visibility',

        async ({ page }) => {

            // Verify Password textbox visible
            await expect(
                page.locator(
                    'input[name="password"]'
                )
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC03 - Login Button Visibility
    // =====================================================

    test(
        'TC03 - Login Button Visibility',

        async ({ page }) => {

            // Verify Login button visible
            await expect(
                page.locator(
                    'input[value="Log In"]'
                )
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC04 - Register Link Visibility
    // =====================================================

    test(
        'TC04 - Register Link Visibility',

        async ({ page }) => {

            // Verify Register link visible
            await expect(
                page.locator('text=Register')
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC05 - Forgot Login Info Visibility
    // =====================================================

    test(
        'TC05 - Forgot Login Info Visibility',

        async ({ page }) => {

            // Verify Forgot Login link visible
            await expect(
                page.locator(
                    'text=Forgot login info?'
                )
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC06 - Home Page Title Validation
    // =====================================================

    test(
        'TC06 - Home Page Title Validation',

        {
            tag: '@regression'
        },

        async ({ page }) => {

            // Verify Title
            await expect(page)
                .toHaveTitle(/ParaBank/);
        }
    );

    // =====================================================
    // TC07 - Customer Login Text Validation
    // =====================================================

    test(
        'TC07 - Customer Login Text Validation',

        async ({ page }) => {

            // Verify Customer Login text
            await expect(
                page.locator('body')
            ).toContainText(
                'Customer Login'
            );
        }
    );

    // =====================================================
    // TC08 - ParaBank Logo Visibility
    // =====================================================

    test(
        'TC08 - ParaBank Logo Visibility',

        async ({ page }) => {

            // Verify first image visible
            await expect(
                page.locator('img').first()
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC09 - Register Navigation
    // =====================================================

    test(
        'TC09 - Register Navigation',

        async ({ page }) => {

            // Click Register link
            await page.locator(
                'text=Register'
            ).click();

            // Verify URL
            await expect(page)
                .toHaveURL(/register/);
        }
    );

    // =====================================================
    // TC10 - Forgot Login Navigation
    // =====================================================

    test(
        'TC10 - Forgot Login Navigation',

        async ({ page }) => {

            // Click Forgot Login Info
            await page.locator(
                'text=Forgot login info?'
            ).click();

            // Verify URL
            await expect(page)
                .toHaveURL(/lookup/);
        }
    );

    // =====================================================
    // TC11 - Username Field Enabled
    // =====================================================

    test(
        'TC11 - Username Field Enabled',

        async ({ page }) => {

            // Verify Username field enabled
            await expect(
                page.locator(
                    'input[name="username"]'
                )
            ).toBeEnabled();
        }
    );

    // =====================================================
    // TC12 - Password Field Enabled
    // =====================================================

    test(
        'TC12 - Password Field Enabled',

        async ({ page }) => {

            // Verify Password field enabled
            await expect(
                page.locator(
                    'input[name="password"]'
                )
            ).toBeEnabled();
        }
    );

    // =====================================================
    // TC13 - Login Button Enabled
    // =====================================================

    test(
        'TC13 - Login Button Enabled',

        async ({ page }) => {

            // Verify Login button enabled
            await expect(
                page.locator(
                    'input[value="Log In"]'
                )
            ).toBeEnabled();
        }
    );

    // =====================================================
    // TC14 - Register Link Enabled
    // =====================================================

    test(
        'TC14 - Register Link Enabled',

        async ({ page }) => {

            // Verify Register link enabled
            await expect(
                page.locator(
                    'text=Register'
                )
            ).toBeEnabled();
        }
    );

    // =====================================================
    // TC15 - Home Page URL Validation
    // =====================================================

    test(
        'TC15 - Home Page URL Validation',

        {
            tag: '@smoke'
        },

        async ({ page }) => {

            // Verify URL
            await expect(page)
                .toHaveURL(/index/);
        }
    );

});