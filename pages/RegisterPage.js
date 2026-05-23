// Register Page Class

class RegisterPage {

    // Constructor
    constructor(page) {

        // Store page object
        this.page = page;

        // =====================================================
        // Locators
        // =====================================================

        // First Name textbox
        this.firstName =
            page.locator('#customer\\.firstName');

        // Last Name textbox
        this.lastName =
            page.locator('#customer\\.lastName');

        // Address textbox
        this.address =
            page.locator('#customer\\.address\\.street');

        // City textbox
        this.city =
            page.locator('#customer\\.address\\.city');

        // State textbox
        this.state =
            page.locator('#customer\\.address\\.state');

        // Zip Code textbox
        this.zipCode =
            page.locator('#customer\\.address\\.zipCode');

        // Phone Number textbox
        this.phoneNumber =
            page.locator('#customer\\.phoneNumber');

        // SSN textbox
        this.ssn =
            page.locator('#customer\\.ssn');

        // Username textbox
        this.username =
            page.locator('#customer\\.username');

        // Password textbox
        this.password =
            page.locator('#customer\\.password');

        // Confirm Password textbox
        this.confirmPassword =
            page.locator('#repeatedPassword');

        // Register button
        this.registerButton =
            page.locator('input[value="Register"]');

        // Success message
        this.successMessage =
            page.locator('body');
    }

    // =====================================================
    // Open Register Page
    // =====================================================

    async openRegisterPage() {

        await this.page.goto(
            'https://parabank.parasoft.com/parabank/register.htm'
        );
    }

    // =====================================================
    // Enter First Name
    // =====================================================

    async enterFirstName(firstName) {

        await this.firstName.fill(firstName);
    }

    // =====================================================
    // Enter Last Name
    // =====================================================

    async enterLastName(lastName) {

        await this.lastName.fill(lastName);
    }

    // =====================================================
    // Enter Address
    // =====================================================

    async enterAddress(address) {

        await this.address.fill(address);
    }

    // =====================================================
    // Enter City
    // =====================================================

    async enterCity(city) {

        await this.city.fill(city);
    }

    // =====================================================
    // Enter State
    // =====================================================

    async enterState(state) {

        await this.state.fill(state);
    }

    // =====================================================
    // Enter ZipCode
    // =====================================================

    async enterZipCode(zipCode) {

        await this.zipCode.fill(zipCode);
    }

    // =====================================================
    // Enter Phone Number
    // =====================================================

    async enterPhoneNumber(phoneNumber) {

        await this.phoneNumber.fill(phoneNumber);
    }

    // =====================================================
    // Enter SSN
    // =====================================================

    async enterSSN(ssn) {

        await this.ssn.fill(ssn);
    }

    // =====================================================
    // Enter Username
    // =====================================================

    async enterUsername(username) {

        await this.username.fill(username);
    }

    // =====================================================
    // Enter Password
    // =====================================================

    async enterPassword(password) {

        await this.password.fill(password);
    }

    // =====================================================
    // Enter Confirm Password
    // =====================================================

    async enterConfirmPassword(password) {

        await this.confirmPassword.fill(password);
    }

    // =====================================================
    // Click Register Button
    // =====================================================

    async clickRegisterButton() {

        await this.registerButton.click();
    }

    // Complete Registration
   
    async registerUser(user) {

        await this.enterFirstName(user.firstName);

        await this.enterLastName(user.lastName);

        await this.enterAddress(user.address);

        await this.enterCity(user.city);

        await this.enterState(user.state);

        await this.enterZipCode(user.zipCode);

        await this.enterPhoneNumber(user.phoneNumber);

        await this.enterSSN(user.ssn);

        await this.enterUsername(user.username);

        await this.enterPassword(user.password);

        await this.enterConfirmPassword(user.password);

        await this.clickRegisterButton();
    }
}

// Export RegisterPage Class
export default RegisterPage;