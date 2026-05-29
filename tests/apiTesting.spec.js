import { test, expect } from '@playwright/test';
import ApiPage from '../pages/ApiPage';
import { apiTimeout } from '../config/test-config.js';

test.describe.parallel('API Testing Module', () => {

    let apiPage;

    test.beforeEach(({ request }) => {
        apiPage = new ApiPage(request);
    });

    // =====================================================
    // TC01 - Verify Website API Response
    // =====================================================

    test('TC01 - Verify API Status Code', async () => {

        const response = await apiPage.getAccountDetails();
        expect(response.status()).toBe(200);
    });

    // =====================================================
    // TC02 - Verify Response Body
    // =====================================================

    test('TC02 - Verify Response Body', async () => {

        const response = await apiPage.getResponseBody();
        const body = await response.text();

        console.log(body);
        expect(body.length).toBeGreaterThan(0);
    });

    // =====================================================
    // TC03 - Verify Content Type
    // =====================================================

    test('TC03 - Verify Content Type', async () => {

        const response = await apiPage.getHeaders();
        const contentType = response.headers()['content-type'];

        console.log(contentType);
        expect(contentType).toContain('xml');
    });

    // =====================================================
    // TC04 - Verify Invalid Endpoint
    // =====================================================

    test('TC04 - Verify Invalid Endpoint', async () => {

        const response = await apiPage.getInvalidEndpoint();
        expect(response.status()).toBe(404);
    });

    // =====================================================
    // TC05 - Verify GET Request
    // =====================================================

    test('TC05 - Verify GET Request', async () => {

        const response = await apiPage.getCustomerDetails();
        expect(response.ok()).toBeTruthy();
    });

    // =====================================================
    // TC06 - Verify Response Time
    // =====================================================

    test('TC06 - Verify Response Time', async () => {

        const { responseTime } = await apiPage.getResponseTime();

        console.log('Response Time:', responseTime);
        // Allow up to 10 seconds for API response in CI
        expect(responseTime).toBeLessThan(process.env.CI ? 10000 : 5000);
    });

    // =====================================================
    // TC07 - Verify XML Response
    // =====================================================

    test('TC07 - Verify XML Response', async () => {

        const response = await apiPage.getResponseBody();
        const body = await response.text();

        console.log(body);
        expect(body).toContain('<');
    });

    // =====================================================
    // TC08 - Verify Customer API
    // =====================================================

    test('TC08 - Verify Customer API', async () => {

        const response = await apiPage.getCustomerDetails();
        expect(response.status()).toBe(200);
    });

    // =====================================================
    // TC09 - Verify API Headers
    // =====================================================

    test('TC09 - Verify API Headers', async () => {

        const response = await apiPage.getAccountDetails();
        const headers = response.headers();

        expect(headers).toHaveProperty('content-type');
    });

    // =====================================================
    // TC10 - Verify Login API
    // =====================================================

    test('TC10 - Verify Login API', async () => {

        const response = await apiPage.loginAPI();
        expect(response.status()).toBeLessThan(500);
    });

    // =====================================================
    // TC11 - Verify API Status Text
    // =====================================================

    test('TC11 - Verify API Status Text', async () => {

        const response = await apiPage.getAccountDetails();
        expect(response.statusText()).toContain('OK');
    });

    // =====================================================
    // TC12 - Verify Account Response
    // =====================================================

    test('TC12 - Verify Account Response', async () => {

        const response = await apiPage.getResponseBody();
        const body = await response.text();

        expect(body.length).toBeGreaterThan(0);
    });

    // =====================================================
    // TC13 - Verify API Endpoint Reachable
    // =====================================================

    test('TC13 - Verify API Endpoint Reachable', async () => {

        const response = await apiPage.getAccountDetails();
        expect(response.ok()).toBeTruthy();
    });

    // =====================================================
    // TC14 - Verify Response Not Empty
    // =====================================================

    test('TC14 - Verify Response Not Empty', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

        const responseBody = await response.text();

        expect(responseBody.length).toBeGreaterThan(0);
    });

    // =====================================================
    // TC15 - Verify API Data Exists
    // =====================================================

    test('TC15 - Verify API Data Exists', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/customers/12212'
        );

        const body = await response.text();

        expect(body).toContain('firstName');
    });

});