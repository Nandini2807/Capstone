import { test as base, expect } from '@playwright/test';
import { BillPayPage } from '../pages/BillPayPage';

export const test = base.extend({
  billPayPage: async ({ page }, use) => {

    // ========== LOGIN FIX ==========
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    await page.fill('input[name="username"]', 'john');
    await page.fill('input[name="password"]', 'demo');

    await page.click('input[value="Log In"]');

    await expect(page.locator('text=Log Out')).toBeVisible({ timeout: 10000 });

    const billPayPage = new BillPayPage(page);
    await use(billPayPage);
  }
});

export { expect };