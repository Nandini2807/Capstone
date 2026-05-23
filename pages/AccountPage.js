// Account Page Class

class AccountPage {

    // Constructor
    constructor(page) {

        // Store page object
        this.page = page;

        // =====================================================
        // Login Locators
        // =====================================================

        // Username textbox
        this.username =
            page.locator('input[name="username"]');

        // Password textbox
        this.password =
            page.locator('input[name="password"]');

        // Login button
        this.loginButton =
            page.locator('input[value="Log In"]');

        // =====================================================
        // Account Service Locators
        // =====================================================

        // Accounts Overview Link
        this.accountOverview =
            page.locator('text=Accounts Overview');

        // Open New Account Link
        this.openNewAccount =
            page.locator('text=Open New Account');

        // Transfer Funds Link
        this.transferFunds =
            page.locator('text=Transfer Funds');

        // Bill Pay Link
        this.billPay =
            page.locator('text=Bill Pay');

        // Find Transactions Link
        this.findTransactions =
            page.locator('text=Find Transactions');

        // Update Contact Info Link
        this.updateContactInfo =
            page.locator('text=Update Contact Info');

        // Request Loan Link
        this.requestLoan =
            page.locator('text=Request Loan');

        // Logout Link
        this.logout =
            page.locator('text=Log Out');

        // Body Locator
        this.body =
            page.locator('body');
    }

    // =====================================================
    // Open Application
    // =====================================================

    async openApplication() {

        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm'
        );
    }

    // =====================================================
    // Login Method
    // =====================================================

    async login(username, password) {

        // Enter Username
        await this.username.fill(username);

        // Enter Password
        await this.password.fill(password);

        // Click Login
        await this.loginButton.click();
    }
}

// Export Class
export default AccountPage;