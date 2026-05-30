# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: billPay.spec.js >> @regression Duplicate Payment
- Location: tests/billPay.spec.js:151:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Log Out')
Expected: visible
Timeout: 30000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 30000ms
  - waiting for locator('text=Log Out')

```

```yaml
- banner:
  - heading "Error 1015" [level=1]
  - text: "Ray ID: a03b064d3ec9e3c6 • 2026-05-30 04:34:07 UTC"
  - heading "You are being rate limited" [level=2]
- heading "What happened?" [level=2]
- paragraph: The owner of this website (parabank.parasoft.com) has banned you temporarily from accessing this website.
- paragraph:
  - text: Please see
  - link "https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/":
    - /url: https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1015/
  - text: for more details.
- text: Was this page helpful?
- button "Yes"
- button "No"
- paragraph:
  - text: "Cloudflare Ray ID:"
  - strong: a03b064d3ec9e3c6
  - text: "• Your IP:"
  - button "Click to reveal"
  - text: • Performance & security by
  - link "Cloudflare":
    - /url: https://www.cloudflare.com/5xx-error-landing
```

# Test source

```ts
  1  | import { test as base, expect } from '@playwright/test';
  2  | import { BillPayPage } from '../pages/BillPayPage';
  3  | import { baseURL, testUsername, testPassword, navigationTimeout, elementTimeout } from '../config/test-config.js';
  4  | 
  5  | export const test = base.extend({
  6  |   billPayPage: async ({ page }, use) => {
  7  | 
  8  |     // ========== LOGIN SETUP ==========
  9  |     await page.goto(`${baseURL}/index.htm`, { waitUntil: 'networkidle', timeout: navigationTimeout });
  10 | 
  11 |     await page.fill('input[name="username"]', testUsername, { timeout: elementTimeout });
  12 |     await page.fill('input[name="password"]', testPassword, { timeout: elementTimeout });
  13 | 
  14 |     await page.click('input[value="Log In"]', { timeout: elementTimeout });
  15 | 
  16 |     // Wait for successful login
> 17 |     await expect(page.locator('text=Log Out')).toBeVisible({ timeout: navigationTimeout });
     |                                                ^ Error: expect(locator).toBeVisible() failed
  18 |     await page.waitForURL('**/overview.htm', { timeout: navigationTimeout });
  19 | 
  20 |     const billPayPage = new BillPayPage(page);
  21 |     await use(billPayPage);
  22 |   }
  23 | });
  24 | 
  25 | export { expect };
  26 | 
```