// @ts-check
import { test, expect } from '@playwright/test';
import RegisterPage from '../pages/RegisterPage';
import registerData from '../test-data/registerData.json';

// =====================================================
// REGISTRATION MODULE
// =====================================================

test.describe.parallel(
    'Registration Module',() => {
        test.beforeEach( async ({ page }) => {
                await page.goto(
                    'https://parabank.parasoft.com/parabank/register.htm'
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
        // TC01 Valid Registration
        // =====================================================

        test( 'TC01 - Valid Registration', async ({ page }) => {
                const register = new RegisterPage(page);

                const user = {...registerData.validUser,
                    username:  `nandini${Date.now()}` };

                // Register User
                await register.registerUser( user );

                // Verify Success
                await expect(register.successMessage).toContainText( 'Your account was created successfully');
            }
        );

        // =====================================================
        // TC02 Register Button Visibility
        // =====================================================

        test('TC02 - Register Button Visibility',async ({ page }) => {

                const register =new RegisterPage(page);

                await expect( register.registerButton ).toBeVisible();
            }
        );

        // =====================================================
        // TC03 Username Field Visibility
        // =====================================================

        test('TC03 - Username Field Visibility',async ({ page }) => {

                const register =new RegisterPage(page);
                await expect(register.username).toBeVisible();
            }
        );

        // =====================================================
        // TC04  Password Field Visibility
        // =====================================================

        test('TC04 - Password Field Visibility', async ({ page }) => {

                const register = new RegisterPage(page);

                await expect(register.password).toBeVisible();
            }
        );

        // =====================================================
        // TC05 Confirm Password Visibility
        // =====================================================

        test('TC05 - Confirm Password Visibility',async ({ page }) => {

                const register =  new RegisterPage(page);

                await expect( register.confirmPassword).toBeVisible();
            }
        );

        // =====================================================
        // TC06 Registration Page Title
        // =====================================================

        test('TC06 - Registration Page Title',async ({ page }) => {
            await expect(page).toHaveTitle(/ParaBank/);
            }
        );

        // =====================================================
        // TC07 Registration URL Validation
        // =====================================================

        test( 'TC07 - Registration URL Validation', async ({ page }) => {

                await expect(page).toHaveURL(/register/);
            }
        );

        // =====================================================
        // TC08 First Name Visibility
        // =====================================================

        test( 'TC08 - First Name Visibility', async ({ page }) => {

                const register = new RegisterPage(page);

                await expect( register.firstName).toBeVisible();
            }
        );

        // =====================================================
        // TC09 Last Name Visibility
        // =====================================================

        test('TC09 - Last Name Visibility',async ({ page }) => {

                const register = new RegisterPage(page);

                await expect( register.lastName ).toBeVisible();
            }
        );

        // =====================================================
        // TC10  Address Visibility
        // =====================================================

        test('TC10 - Address Visibility', async ({ page }) => {

                const register = new RegisterPage(page);

                await expect(register.address).toBeVisible();
            }
        );

        // =====================================================
        // TC11  City Field Visibility
        // =====================================================

        test('TC11 - City Field Visibility', async ({ page }) => {

                const register =  new RegisterPage(page);

                await expect( register.city).toBeVisible();
            }
        );

        // =====================================================
        // TC12 State Field Visibility
        // =====================================================

        test( 'TC12 - State Field Visibility', async ({ page }) => {

                const register = new RegisterPage(page);

                await expect(register.state ).toBeVisible();
            }
        );

        // =====================================================
        // TC13 Zip Code Field Visibility'
        // =====================================================

        test('TC13 - Zip Code Field Visibility',async ({ page }) => {

                const register = new RegisterPage(page);

                await expect( register.zipCode ).toBeVisible();
            }
        );

        // =====================================================
        // TC14 Phone Number Field Visibility
        // =====================================================

        test('TC14 - Phone Number Field Visibility',async ({ page }) => {

                const register = new RegisterPage(page);

                await expect( register.phoneNumber ).toBeVisible();
            }
        );

        // =====================================================
        // TC15 SSN Field Visibility
        // =====================================================

        test('TC15 - SSN Field Visibility', async ({ page }) => {

                const register = new RegisterPage(page);

                await expect(register.ssn).toBeVisible();
            }
        );
    }
);