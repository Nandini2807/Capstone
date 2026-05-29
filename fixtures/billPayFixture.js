import { test as base, expect } from '@playwright/test';
import { BillPayPage } from '../pages/BillPayPage';
import { baseURL, testUsername, testPassword, navigationTimeout, elementTimeout } from '../config/test-config.js';

export const test = base.extend({
  billPayPage: async ({ page }, use) => {

    // ========== LOGIN SETUP ==========
    await page.goto(`${baseURL}/index.htm`, { waitUntil: 'networkidle', timeout: navigationTimeout });

    await page.fill('input[name="username"]', testUsername, { timeout: elementTimeout });
    await page.fill('input[name="password"]', testPassword, { timeout: elementTimeout });

    await page.click('input[value="Log In"]', { timeout: elementTimeout });

    // Wait for successful login
    await expect(page.locator('text=Log Out')).toBeVisible({ timeout: navigationTimeout });
    await page.waitForURL('**/overview.htm', { timeout: navigationTimeout });

    const billPayPage = new BillPayPage(page);
    await use(billPayPage);
  }
});

export { expect };
