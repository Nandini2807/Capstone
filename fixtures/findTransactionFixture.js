
import { test as base } from '@playwright/test';

import { FindTransactionsPage }from '../pages/FindTransactionsPage';

export const test = base.extend({

    findTransactionsPage: async ({ page }, use) => {

        
        await page.goto( 'https://parabank.parasoft.com/parabank/index.htm');

        await page.locator('input[name="username"]' ).fill('john');

        await page.locator('input[name="password"]' ).fill('demo');

        await page.locator('input[value="Log In"]' ).click();

        await page.waitForURL(
            '**/overview.htm',
            {
                timeout: 20000
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

export { expect }
from '@playwright/test';