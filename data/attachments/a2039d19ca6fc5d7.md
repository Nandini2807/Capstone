# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: authentication.spec.js >> Authentication Module >> TC03 - Invalid Password
- Location: tests/authentication.spec.js:81:9

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.error')
Timeout: 5000ms
- Expected substring  - 1
+ Received string     + 3

- could not be verified
+
+ 			An internal error has occurred and has been logged.
+ 		

Call log:
  - Expect "toContainText" with timeout 5000ms
  - waiting for locator('.error')
    12 × locator resolved to <p class="error">↵⇆⇆⇆An internal error has occurred and has been l…</p>
       - unexpected value "
			An internal error has occurred and has been logged.
		"

```

```yaml
- link:
  - /url: admin.htm
  - img
- link "ParaBank":
  - /url: index.htm
  - img "ParaBank"
- paragraph: Experience the difference
- list:
  - listitem: Solutions
  - listitem:
    - link "About Us":
      - /url: about.htm
  - listitem:
    - link "Services":
      - /url: services.htm
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
  - listitem:
    - link "Admin Page":
      - /url: admin.htm
- list:
  - listitem:
    - link "home":
      - /url: index.htm
  - listitem:
    - link "about":
      - /url: about.htm
  - listitem:
    - link "contact":
      - /url: contact.htm
- paragraph: Welcome John Smith
- heading "Account Services" [level=2]
- list:
  - listitem:
    - link "Open New Account":
      - /url: openaccount.htm
  - listitem:
    - link "Accounts Overview":
      - /url: overview.htm
  - listitem:
    - link "Transfer Funds":
      - /url: transfer.htm
  - listitem:
    - link "Bill Pay":
      - /url: billpay.htm
  - listitem:
    - link "Find Transactions":
      - /url: findtrans.htm
  - listitem:
    - link "Update Contact Info":
      - /url: updateprofile.htm
  - listitem:
    - link "Request Loan":
      - /url: requestloan.htm
  - listitem:
    - link "Log Out":
      - /url: logout.htm
- heading "Accounts Overview" [level=1]
- table:
  - rowgroup:
    - row "Account Balance* Available Amount":
      - columnheader "Account"
      - columnheader "Balance*"
      - columnheader "Available Amount"
  - rowgroup:
    - row "12345 -$6806.43 $0.00":
      - cell "12345":
        - link "12345":
          - /url: activity.htm?id=12345
      - cell "-$6806.43"
      - cell "$0.00"
    - row "12456 $966.88 $966.88":
      - cell "12456":
        - link "12456":
          - /url: activity.htm?id=12456
      - cell "$966.88"
      - cell "$966.88"
    - row "12567 $100.00 $100.00":
      - cell "12567":
        - link "12567":
          - /url: activity.htm?id=12567
      - cell "$100.00"
      - cell "$100.00"
    - row "12678 -$100.00 $0.00":
      - cell "12678":
        - link "12678":
          - /url: activity.htm?id=12678
      - cell "-$100.00"
      - cell "$0.00"
    - row "12789 $100.00 $100.00":
      - cell "12789":
        - link "12789":
          - /url: activity.htm?id=12789
      - cell "$100.00"
      - cell "$100.00"
    - row "12900 $0.00 $0.00":
      - cell "12900":
        - link "12900":
          - /url: activity.htm?id=12900
      - cell "$0.00"
      - cell "$0.00"
    - row "13011 $100.00 $100.00":
      - cell "13011":
        - link "13011":
          - /url: activity.htm?id=13011
      - cell "$100.00"
      - cell "$100.00"
    - row "13122 $1100.00 $1100.00":
      - cell "13122":
        - link "13122":
          - /url: activity.htm?id=13122
      - cell "$1100.00"
      - cell "$1100.00"
    - row "13233 $100.00 $100.00":
      - cell "13233":
        - link "13233":
          - /url: activity.htm?id=13233
      - cell "$100.00"
      - cell "$100.00"
    - row "13344 $1131.10 $1131.10":
      - cell "13344":
        - link "13344":
          - /url: activity.htm?id=13344
      - cell "$1131.10"
      - cell "$1131.10"
    - row "14232 $100.00 $100.00":
      - cell "14232":
        - link "14232":
          - /url: activity.htm?id=14232
      - cell "$100.00"
      - cell "$100.00"
    - row "14454 $100.00 $100.00":
      - cell "14454":
        - link "14454":
          - /url: activity.htm?id=14454
      - cell "$100.00"
      - cell "$100.00"
    - row "15786 $100.00 $100.00":
      - cell "15786":
        - link "15786":
          - /url: activity.htm?id=15786
      - cell "$100.00"
      - cell "$100.00"
    - row "16896 $0.00 $0.00":
      - cell "16896":
        - link "16896":
          - /url: activity.htm?id=16896
      - cell "$0.00"
      - cell "$0.00"
    - row "17895 $100.00 $100.00":
      - cell "17895":
        - link "17895":
          - /url: activity.htm?id=17895
      - cell "$100.00"
      - cell "$100.00"
    - row "18006 $100.00 $100.00":
      - cell "18006":
        - link "18006":
          - /url: activity.htm?id=18006
      - cell "$100.00"
      - cell "$100.00"
    - row "22557 $100.00 $100.00":
      - cell "22557":
        - link "22557":
          - /url: activity.htm?id=22557
      - cell "$100.00"
      - cell "$100.00"
    - row "44757 $100.00 $100.00":
      - cell "44757":
        - link "44757":
          - /url: activity.htm?id=44757
      - cell "$100.00"
      - cell "$100.00"
    - row "44868 $100.00 $100.00":
      - cell "44868":
        - link "44868":
          - /url: activity.htm?id=44868
      - cell "$100.00"
      - cell "$100.00"
    - row "44979 $100.00 $100.00":
      - cell "44979":
        - link "44979":
          - /url: activity.htm?id=44979
      - cell "$100.00"
      - cell "$100.00"
    - row "45090 $100.00 $100.00":
      - cell "45090":
        - link "45090":
          - /url: activity.htm?id=45090
      - cell "$100.00"
      - cell "$100.00"
    - row "45201 $100.00 $100.00":
      - cell "45201":
        - link "45201":
          - /url: activity.htm?id=45201
      - cell "$100.00"
      - cell "$100.00"
    - row "45312 $100.00 $100.00":
      - cell "45312":
        - link "45312":
          - /url: activity.htm?id=45312
      - cell "$100.00"
      - cell "$100.00"
    - row "45423 $100.00 $100.00":
      - cell "45423":
        - link "45423":
          - /url: activity.htm?id=45423
      - cell "$100.00"
      - cell "$100.00"
    - row "45534 $100.00 $100.00":
      - cell "45534":
        - link "45534":
          - /url: activity.htm?id=45534
      - cell "$100.00"
      - cell "$100.00"
    - row "45645 $100.00 $100.00":
      - cell "45645":
        - link "45645":
          - /url: activity.htm?id=45645
      - cell "$100.00"
      - cell "$100.00"
    - row "45756 $100.00 $100.00":
      - cell "45756":
        - link "45756":
          - /url: activity.htm?id=45756
      - cell "$100.00"
      - cell "$100.00"
    - row "46755 $100.00 $100.00":
      - cell "46755":
        - link "46755":
          - /url: activity.htm?id=46755
      - cell "$100.00"
      - cell "$100.00"
    - row "46866 $100.00 $100.00":
      - cell "46866":
        - link "46866":
          - /url: activity.htm?id=46866
      - cell "$100.00"
      - cell "$100.00"
    - row "46977 $100.00 $100.00":
      - cell "46977":
        - link "46977":
          - /url: activity.htm?id=46977
      - cell "$100.00"
      - cell "$100.00"
    - row "47088 $100.00 $100.00":
      - cell "47088":
        - link "47088":
          - /url: activity.htm?id=47088
      - cell "$100.00"
      - cell "$100.00"
    - row "47199 $100.00 $100.00":
      - cell "47199":
        - link "47199":
          - /url: activity.htm?id=47199
      - cell "$100.00"
      - cell "$100.00"
    - row "47310 $100.00 $100.00":
      - cell "47310":
        - link "47310":
          - /url: activity.htm?id=47310
      - cell "$100.00"
      - cell "$100.00"
    - row "47421 $100.00 $100.00":
      - cell "47421":
        - link "47421":
          - /url: activity.htm?id=47421
      - cell "$100.00"
      - cell "$100.00"
    - row "47643 $100.00 $100.00":
      - cell "47643":
        - link "47643":
          - /url: activity.htm?id=47643
      - cell "$100.00"
      - cell "$100.00"
    - row "47754 $100.00 $100.00":
      - cell "47754":
        - link "47754":
          - /url: activity.htm?id=47754
      - cell "$100.00"
      - cell "$100.00"
    - row "47865 $100.00 $100.00":
      - cell "47865":
        - link "47865":
          - /url: activity.htm?id=47865
      - cell "$100.00"
      - cell "$100.00"
    - row "47976 $100.00 $100.00":
      - cell "47976":
        - link "47976":
          - /url: activity.htm?id=47976
      - cell "$100.00"
      - cell "$100.00"
    - row "48531 $100.00 $100.00":
      - cell "48531":
        - link "48531":
          - /url: activity.htm?id=48531
      - cell "$100.00"
      - cell "$100.00"
    - row "48642 $100.00 $100.00":
      - cell "48642":
        - link "48642":
          - /url: activity.htm?id=48642
      - cell "$100.00"
      - cell "$100.00"
    - row "48753 $100.00 $100.00":
      - cell "48753":
        - link "48753":
          - /url: activity.htm?id=48753
      - cell "$100.00"
      - cell "$100.00"
    - row "48864 $100.00 $100.00":
      - cell "48864":
        - link "48864":
          - /url: activity.htm?id=48864
      - cell "$100.00"
      - cell "$100.00"
    - row "49197 $100.00 $100.00":
      - cell "49197":
        - link "49197":
          - /url: activity.htm?id=49197
      - cell "$100.00"
      - cell "$100.00"
    - row "49308 $100.00 $100.00":
      - cell "49308":
        - link "49308":
          - /url: activity.htm?id=49308
      - cell "$100.00"
      - cell "$100.00"
    - row "49419 $100.00 $100.00":
      - cell "49419":
        - link "49419":
          - /url: activity.htm?id=49419
      - cell "$100.00"
      - cell "$100.00"
    - row "49530 $100.00 $100.00":
      - cell "49530":
        - link "49530":
          - /url: activity.htm?id=49530
      - cell "$100.00"
      - cell "$100.00"
    - row "49641 $100.00 $100.00":
      - cell "49641":
        - link "49641":
          - /url: activity.htm?id=49641
      - cell "$100.00"
      - cell "$100.00"
    - row "54321 $1401.12 $1401.12":
      - cell "54321":
        - link "54321":
          - /url: activity.htm?id=54321
      - cell "$1401.12"
      - cell "$1401.12"
    - row "Total $1692.67":
      - cell "Total"
      - cell "$1692.67"
      - cell
  - rowgroup:
    - row "*Balance includes deposits that may be subject to holds":
      - cell "*Balance includes deposits that may be subject to holds"
- list:
  - listitem:
    - link "Home":
      - /url: index.htm
    - text: "|"
  - listitem:
    - link "About Us":
      - /url: about.htm
    - text: "|"
  - listitem:
    - link "Services":
      - /url: services.htm
    - text: "|"
  - listitem:
    - link "Products":
      - /url: http://www.parasoft.com/jsp/products.jsp
    - text: "|"
  - listitem:
    - link "Locations":
      - /url: http://www.parasoft.com/jsp/pr/contacts.jsp
    - text: "|"
  - listitem:
    - link "Forum":
      - /url: http://forums.parasoft.com/
    - text: "|"
  - listitem:
    - link "Site Map":
      - /url: sitemap.htm
    - text: "|"
  - listitem:
    - link "Contact Us":
      - /url: contact.htm
- paragraph: © Parasoft. All rights reserved.
- list:
  - listitem: "Visit us at:"
  - listitem:
    - link "www.parasoft.com":
      - /url: http://www.parasoft.com/
```

# Test source

```ts
  1   | // @ts-check
  2   | 
  3   | import { test, expect } from '@playwright/test';
  4   | import LoginPage from '../pages/LoginPage';
  5   | import loginData from '../test-data/loginData.json';
  6   | import { baseURL, navigationTimeout } from '../config/test-config.js';
  7   | 
  8   | test.describe('Authentication Module', () => {
  9   | 
  10  |     // =====================================================
  11  |     // BEFORE EACH
  12  |     // =====================================================
  13  | 
  14  |     test.beforeEach(async ({ page }) => {
  15  | 
  16  |         await page.goto(
  17  |             `${baseURL}/index.htm`,
  18  |             { waitUntil: 'networkidle', timeout: navigationTimeout }
  19  |         );
  20  |     });
  21  | 
  22  |     // =====================================================
  23  |     // SCREENSHOT ON FAILURE
  24  |     // =====================================================
  25  | 
  26  |     test.afterEach(async ({ page }, testInfo) => {
  27  | 
  28  |         if (testInfo.status !== testInfo.expectedStatus) {
  29  | 
  30  |             await page.screenshot({
  31  | 
  32  |                 path:
  33  |                 `screenshots/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.png`,
  34  | 
  35  |                 fullPage: true
  36  |             });
  37  |         }
  38  |     });
  39  | 
  40  |     // =====================================================
  41  |     // TC01 - VALID LOGIN
  42  |     // =====================================================
  43  | 
  44  |     test('TC01 - Valid Login', async ({ page }) => {
  45  | 
  46  |         const login = new LoginPage(page);
  47  | 
  48  |         await login.login(
  49  | 
  50  |             loginData.validUser.username,
  51  | 
  52  |             loginData.validUser.password
  53  |         );
  54  | 
  55  |         await expect(page).toHaveURL(/overview/);
  56  |     });
  57  | 
  58  |     // =====================================================
  59  |     // TC02 - INVALID USERNAME
  60  |     // =====================================================
  61  | 
  62  |     test('TC02 - Invalid Username', async ({ page }) => {
  63  | 
  64  |         const login = new LoginPage(page);
  65  | 
  66  |         await login.login(
  67  | 
  68  |             loginData.invalidUsername.username,
  69  | 
  70  |             loginData.invalidUsername.password
  71  |         );
  72  | 
  73  |         await expect(login.errorMessage)
  74  |             .toContainText('could not be verified');
  75  |     });
  76  | 
  77  |     // =====================================================
  78  |     // TC03 - INVALID PASSWORD
  79  |     // =====================================================
  80  | 
  81  |     test('TC03 - Invalid Password', async ({ page }) => {
  82  | 
  83  |         const login = new LoginPage(page);
  84  | 
  85  |         await login.login(
  86  | 
  87  |             loginData.invalidPassword.username,
  88  | 
  89  |             loginData.invalidPassword.password
  90  |         );
  91  | 
  92  |         await expect(login.errorMessage)
> 93  |             .toContainText('could not be verified');
      |              ^ Error: expect(locator).toContainText(expected) failed
  94  |     });
  95  | 
  96  |     // =====================================================
  97  |     // TC04 - EMPTY USERNAME
  98  |     // =====================================================
  99  | 
  100 |     test('TC04 - Empty Username', async ({ page }) => {
  101 | 
  102 |         const login = new LoginPage(page);
  103 | 
  104 |         await login.enterPassword(
  105 |             loginData.emptyUsername.password
  106 |         );
  107 | 
  108 |         await login.clickLoginButton();
  109 | 
  110 |         await expect(login.validationMessage)
  111 |             .toContainText('Please');
  112 |     });
  113 | 
  114 |     // =====================================================
  115 |     // TC05 - EMPTY PASSWORD
  116 |     // =====================================================
  117 | 
  118 |     test('TC05 - Empty Password', async ({ page }) => {
  119 | 
  120 |         const login = new LoginPage(page);
  121 | 
  122 |         await login.enterUsername(
  123 |             loginData.emptyPassword.username
  124 |         );
  125 | 
  126 |         await login.clickLoginButton();
  127 | 
  128 |         await expect(login.validationMessage)
  129 |             .toContainText('Please');
  130 |     });
  131 | 
  132 |     // =====================================================
  133 |     // TC06 - EMPTY CREDENTIALS
  134 |     // =====================================================
  135 | 
  136 |     test('TC06 - Empty Credentials', async ({ page }) => {
  137 | 
  138 |         const login = new LoginPage(page);
  139 | 
  140 |         await login.clickLoginButton();
  141 | 
  142 |         await expect(login.validationMessage)
  143 |             .toContainText('Please');
  144 |     });
  145 | 
  146 |     // =====================================================
  147 |     // TC07 - LOGOUT
  148 |     // =====================================================
  149 | 
  150 |     test('TC07 - Logout Validation', async ({ page }) => {
  151 | 
  152 |         const login = new LoginPage(page);
  153 | 
  154 |         await login.login(
  155 | 
  156 |             loginData.validUser.username,
  157 | 
  158 |             loginData.validUser.password
  159 |         );
  160 | 
  161 |         await login.logout();
  162 | 
  163 |         await expect(login.loginButton)
  164 |             .toBeVisible();
  165 |     });
  166 | 
  167 |     // =====================================================
  168 |     // TC08 - PASSWORD MASKING
  169 |     // =====================================================
  170 | 
  171 |     test('TC08 - Password Masking', async ({ page }) => {
  172 | 
  173 |         const login = new LoginPage(page);
  174 | 
  175 |         await expect(login.passwordTextBox)
  176 |             .toHaveAttribute('type', 'password');
  177 |     });
  178 | 
  179 |     // =====================================================
  180 |     // TC09 - LOGIN BUTTON VISIBLE
  181 |     // =====================================================
  182 | 
  183 |     test('TC09 - Login Button Visibility', async ({ page }) => {
  184 | 
  185 |         const login = new LoginPage(page);
  186 | 
  187 |         await expect(login.loginButton)
  188 |             .toBeVisible();
  189 |     });
  190 | 
  191 |     // =====================================================
  192 |     // TC10 - USERNAME FIELD VISIBLE
  193 |     // =====================================================
```