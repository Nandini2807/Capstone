class LoginPage {

    constructor(page) {

        // =====================================================
        // STORE PAGE
        // =====================================================

        this.page = page;

        // =====================================================
        // LOCATORS
        // =====================================================

        this.usernameTextBox =
            page.locator('input[name="username"]');

        this.passwordTextBox =
            page.locator('input[name="password"]');

        this.loginButton =
            page.locator('input[value="Log In"]');

        this.logoutLink =
            page.locator('text=Log Out');

        this.accountOverviewText =
            page.locator('text=Accounts Overview');

        this.errorMessage =
            page.locator('.error');

        this.validationMessage =
            page.locator('body');
    }

    // =====================================================
    // OPEN LOGIN PAGE
    // =====================================================

    async gotoLoginPage() {

        await this.page.goto(
            'https://parabank.parasoft.com/parabank/index.htm'
        );
    }

    // =====================================================
    // ENTER USERNAME
    // =====================================================

    async enterUsername(username) {

        await this.usernameTextBox.fill(username);
    }

    // =====================================================
    // ENTER PASSWORD
    // =====================================================

    async enterPassword(password) {

        await this.passwordTextBox.fill(password);
    }

    // =====================================================
    // CLICK LOGIN BUTTON
    // =====================================================

    async clickLoginButton() {

        await this.loginButton.click();
    }

    // =====================================================
    // COMPLETE LOGIN
    // =====================================================

    async login(username, password) {

        await this.enterUsername(username);

        await this.enterPassword(password);

        await this.clickLoginButton();
    }

    // =====================================================
    // LOGOUT
    // =====================================================

    async logout() {

        await this.logoutLink.click();
    }

    // =====================================================
    // VERIFY SUCCESSFUL LOGIN
    // =====================================================

    async verifySuccessfulLogin() {

        await this.accountOverviewText.waitFor({

            state: 'visible'
        });
    }

    // =====================================================
    // VERIFY INVALID LOGIN
    // =====================================================

    async verifyInvalidLogin() {

        await this.errorMessage.waitFor({

            state: 'visible'
        });
    }

    // =====================================================
    // VERIFY VALIDATION MESSAGE
    // =====================================================

    async verifyValidationMessage() {

        await this.validationMessage.waitFor({

            state: 'visible'
        });
    }
}

export default LoginPage;