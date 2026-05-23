// Login Page Class

class LoginPage {

    // Constructor
    constructor(page) {

        // Store page instance
        this.page = page;

        // Username textbox
        this.usernameTextBox =
            page.locator('input[name="username"]');

        // Password textbox
        this.passwordTextBox =
            page.locator('input[name="password"]');

        // Login button
        this.loginButton =
            page.locator('input[value="Log In"]');

        // Logout link
        this.logoutLink =
            page.locator('text=Log Out');

        // Accounts Overview text
        this.accountOverviewText =
            page.locator('text=Accounts Overview');

        // Error message
        this.errorMessage =
            page.locator(
                'text=The username and password could not be verified'
            );

        // Empty credential validation
        this.emptyValidationMessage =
            page.locator(
                'text=Please enter a username and password'
            );
    }

    // Open application
    async gotoLoginPage() {

        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm'
        );
    }

    // Enter username
    async enterUsername(username) {

        await this.usernameTextBox.fill(username);
    }

    // Enter password
    async enterPassword(password) {

        await this.passwordTextBox.fill(password);
    }

    // Click login button
    async clickLoginButton() {

        await this.loginButton.click();
    }

    // Complete login process
    async login(username, password) {

        // Fill username
        await this.enterUsername(username);

        // Fill password
        await this.enterPassword(password);

        // Click login
        await this.clickLoginButton();
    }

    // Logout from application
    async logout() {

        await this.logoutLink.click();
    }

    // Verify successful login
    async verifySuccessfulLogin() {

        await this.accountOverviewText.waitFor({
            state: 'visible'
        });
    }

    // Verify invalid login
    async verifyInvalidLogin() {

        await this.errorMessage.waitFor({
            state: 'visible'
        });
    }

    // Verify empty field validation
    async verifyEmptyValidation() {

        await this.emptyValidationMessage.waitFor({
            state: 'visible'
        });
    }

    // Verify login button visible
    async verifyLoginButtonVisible() {

        await this.loginButton.isVisible();
    }

    // Verify username textbox visible
    async verifyUsernameVisible() {

        await this.usernameTextBox.isVisible();
    }

    // Verify password textbox visible
    async verifyPasswordVisible() {

        await this.passwordTextBox.isVisible();
    }

    // Verify password masking
    async verifyPasswordMasked() {

        await this.passwordTextBox
            .toHaveAttribute('type', 'password');
    }
}

// Export class
export default LoginPage;