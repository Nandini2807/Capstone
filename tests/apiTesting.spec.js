import { test, expect } from '@playwright/test';
import ApiPage from '../pages/ApiPage';
test.describe.parallel('API Testing Module', () => {

    // =====================================================
    // TC01 - Verify Website API Response
    // =====================================================

    test('TC01 - Verify API Status Code', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

        expect(response.status()).toBe(200);
    });

    // =====================================================
    // TC02 - Verify Response Body
    // =====================================================


   test('TC02 - Verify Response Body',async ({ request }) => {

        const apiPage = new ApiPage(request);

        const response =await apiPage.getResponseBody();

        const body = await response.text();

        console.log(body);

        expect(body.length).toBeGreaterThan(0);
    }
);

    // =====================================================
    // TC03 - Verify Content Type
    // =====================================================

   test('TC03 - Verify Content Type',async ({ request }) => {

        const apiPage = new ApiPage(request);

        const response = await apiPage.getHeaders();

        const contentType = response.headers()['content-type'];

        console.log(contentType);

        expect(contentType) .toContain('xml');
    }
);

    // =====================================================
    // TC04 - Verify Invalid Endpoint
    // =====================================================

    test('TC04 - Verify Invalid Endpoint', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/invalid'
        );

        expect(response.status()).toBe(404);
    });

    // =====================================================
    // TC05 - Verify GET Request
    // =====================================================

    test('TC05 - Verify GET Request', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/customers/12212'
        );

        expect(response.ok()).toBeTruthy();
    });

    // =====================================================
    // TC06 - Verify Response Time
    // =====================================================

    test('TC06 - Verify Response Time', async ({ request }) => {

        const startTime = Date.now();

        await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

        const endTime = Date.now();

        const responseTime =endTime - startTime;

        console.log('Response Time:', responseTime);

        expect(responseTime).toBeLessThan(5000);
    });

    // =====================================================
    // TC07 - Verify JSON Response
    // =====================================================

test( 'TC07 - Verify XML Response',async ({ request }) => {

        const apiPage = new ApiPage(request);

        const response = await apiPage.getResponseBody();

        const body = await response.text();

        console.log(body);

        expect(body) .toContain('<');
    }
);

    // =====================================================
    // TC08 - Verify Customer API
    // =====================================================

    test('TC08 - Verify Customer API', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/customers/12212'
        );

        expect(response.status()).toBe(200);
    });

    // =====================================================
    // TC09 - Verify API Headers
    // =====================================================

    test('TC09 - Verify API Headers', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

        const headers =response.headers();

        expect(headers).toHaveProperty('content-type' );
    });

    // =====================================================
    // TC10 - Verify Unauthorized API
    // =====================================================

    test('TC10 - Verify Unauthorized API', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/login/john/demo'
        );

        expect(response.status()) .toBeLessThan(500);
    });

    // =====================================================
    // TC11 - Verify API Status Text
    // =====================================================

    test('TC11 - Verify API Status Text', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

        expect(response.statusText()) .toContain('OK');
    });

    // =====================================================
    // TC12 - Verify XML Response
    // =====================================================

    test('TC12 - Verify XML Response', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

        const body = await response.text();

        expect(body.length) .toBeGreaterThan(0);
    });

    // =====================================================
    // TC13 - Verify API Endpoint Reachable
    // =====================================================

    test('TC13 - Verify API Endpoint Reachable', async ({ request }) => {

        const response = await request.get(
            'https://parabank.parasoft.com/parabank/services/bank/accounts/13344'
        );

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