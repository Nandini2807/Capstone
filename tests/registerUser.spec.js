// @ts-check


import { test, expect } from '@playwright/test';

// Import Register Page
import RegisterPage from '../pages/RegisterPage';

// =====================================================
// Registration Module
// =====================================================

test.describe('Registration Module', () => {

    // =====================================================
    // Before Each Hook
    // =====================================================

    test.beforeEach(async ({ page }) => {

        // Open Registration Page
        await page.goto(
            'https://parabank.parasoft.com/parabank/register.htm'
        );
    });

    // =====================================================
    // TC01 - Valid Registration
    // =====================================================

    test(
        'TC01 - Valid Registration',

        {
            tag: ['@smoke', '@regression']
        },

        async ({ page }) => {

            // Create RegisterPage object
            const register = new RegisterPage(page);

            // Generate Dynamic Username
            const username =
                `nandini${Date.now()}`;

            // User Test Data
            const user = {

                firstName: 'Nandini',
                lastName: 'Jadhav',
                address: 'Pune',
                city: 'Pune',
                state: 'MH',
                zipCode: '411001',
                phoneNumber: '9999999999',
                ssn: '1111',
                username: username,
                password: 'demo123'
            };

            // Annotation Step
            await test.step(
                'Fill Registration Form',
                async () => {

                    await register.registerUser(user);
                }
            );

            // Wait for complete load
            await page.waitForLoadState('networkidle');

            // Verify Registration Success
            await expect(
                page.locator('body')
            ).toContainText(
                'Your account was created successfully'
            );
        }
    );

    // =====================================================
    // TC02 - Register Button Visibility
    // =====================================================

    test(
        'TC02 - Register Button Visibility',

        {
            tag: '@smoke'
        },

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Soft Assertion
            await expect.soft(
                register.registerButton
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC03 - Username Field Visibility
    // =====================================================

    test(
        'TC03 - Username Field Visibility',

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Hard Assertion
            await expect(
                register.username
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC04 - Password Field Visibility
    // =====================================================

    test(
        'TC04 - Password Field Visibility',

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Hard Assertion
            await expect(
                register.password
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC05 - Confirm Password Visibility
    // =====================================================

    test(
        'TC05 - Confirm Password Visibility',

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Hard Assertion
            await expect(
                register.confirmPassword
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC06 - Registration Page Title
    // =====================================================

    test(
        'TC06 - Registration Page Title',

        {
            tag: '@smoke'
        },

        async ({ page }) => {

            // Verify Page Title
            await expect(page)
                .toHaveTitle(/ParaBank/);
        }
    );

    // =====================================================
    // TC07 - Registration URL Validation
    // =====================================================

    test(
        'TC07 - Registration URL Validation',

        async ({ page }) => {

            // Verify URL
            await expect(page)
                .toHaveURL(/register/);
        }
    );

    // =====================================================
    // TC08 - First Name Field Visibility
    // =====================================================

    test(
        'TC08 - First Name Visibility',

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Verify First Name field
            await expect(
                register.firstName
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC09 - Last Name Field Visibility
    // =====================================================

    test(
        'TC09 - Last Name Visibility',

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Verify Last Name field
            await expect(
                register.lastName
            ).toBeVisible();
        }
    );

    // =====================================================
    // TC10 - Address Field Visibility
    // =====================================================

    test(
        'TC10 - Address Visibility',

        async ({ page }) => {

            const register = new RegisterPage(page);

            // Verify Address field
            await expect(
                register.address
            ).toBeVisible();
        }
    );

});