
import { test as base, expect }
from '@playwright/test';

import LoginPage
from '../pages/LoginPage';

import FindTransactionsPage
from '../pages/FindTransactionsPage';

export const test = base.extend({

    findTransactionsPage:
    async ({ page }, use) => {

        // ================= LOGIN =================

        const loginPage =
            new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login('john', 'demo');

        await expect(
            page.locator('text=Log Out')
        ).toBeVisible();

        // ================= PAGE OBJECT =================

        const findTransactionsPage =
            new FindTransactionsPage(page);

        await use(findTransactionsPage);
    }
});

export { expect };