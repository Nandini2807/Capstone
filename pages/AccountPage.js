class AccountPage {
    constructor(page) {

        this.page = page;

        this.username = page.locator( 'input[name="username"]');

        this.password = page.locator('input[name="password"]' );

        this.loginButton = page.locator( 'input[value="Log In"]' );

        // =================================================
        // LINK LOCATORS
        // =================================================

        this.registerLink = page.locator( 'text=Register'  );

        this.forgotLogin = page.locator('text=Forgot login info?' );

        // =================================================
        // ACCOUNT SERVICE LOCATORS
        // =================================================

        this.accountOverview = page.locator('text=Accounts Overview');

        this.openNewAccount = page.locator('text=Open New Account' );

        this.transferFunds = page.locator( 'text=Transfer Funds' );

        this.billPay = page.locator( 'text=Bill Pay' );

        this.findTransactions = page.locator( 'text=Find Transactions' );

        this.updateContactInfo = page.locator('text=Update Contact Info' );

        this.requestLoan = page.locator( 'text=Request Loan');

        this.logout = page.locator('text=Log Out' );

        this.body = page.locator('body');
    }

    // =================================================
    // OPEN APPLICATION
    // =================================================

    async openApplication() {

        await this.page.goto('https://parabank.parasoft.com/parabank/index.htm');
    }

    // =================================================
    // LOGIN METHOD
    // =================================================

    async login(username, password) {

        await this.username.fill( username);

        await this.password.fill(password);

        await this.loginButton.click();
    }
}

// =====================================================
// EXPORT CLASS
// =====================================================

export default AccountPage;