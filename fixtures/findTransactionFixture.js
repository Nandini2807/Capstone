
import { test as base, expect } from '@playwright/test';

import { FindTransactionsPage }from '../pages/FindTransactionsPage';
import { baseURL, testUsername, testPassword, navigationTimeout, elementTimeout } from '../config/test-config.js';

export const test = base.extend({

    findTransactionsPage: async ({ page }, use) => {

        
        await page.goto(`${baseURL}/index.htm`, { waitUntil: 'networkidle', timeout: navigationTimeout });

        await page.locator('input[name="username"]' ).fill(testUsername, { timeout: elementTimeout });

        await page.locator('input[name="password"]' ).fill(testPassword, { timeout: elementTimeout });

        await page.locator('input[value="Log In"]' ).click({ timeout: elementTimeout });

        await page.waitForURL(
            '**/overview.htm',
            {
                timeout: navigationTimeout
            }
        );

        // ======================================================
        // CREATE PAGE OBJECT
        // ======================================================

        const findTransactionsPage =
            new FindTransactionsPage(page);

        await use(findTransactionsPage);
    }
});

export { expect };