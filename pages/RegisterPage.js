class RegisterPage {
    constructor(page) {

        this.page = page;

        // First Name
        this.firstName = page.locator('#customer\\.firstName' );

        // Last Name
        this.lastName = page.locator('#customer\\.lastName');

        // Address
        this.address = page.locator('#customer\\.address\\.street');

        // City
        this.city = page.locator('#customer\\.address\\.city');

        // State
        this.state = page.locator( '#customer\\.address\\.state');

        // Zip Code
        this.zipCode = page.locator('#customer\\.address\\.zipCode' );

        // Phone Number
        this.phoneNumber =page.locator('#customer\\.phoneNumber' );

        // SSN
        this.ssn = page.locator('#customer\\.ssn');

        // Username
        this.username = page.locator('#customer\\.username');

        // Password
        this.password = page.locator( '#customer\\.password');

        // Confirm Password
        this.confirmPassword = page.locator( '#repeatedPassword');

        // Register Button
        this.registerButton = page.locator('input[value="Register"]');

        // Success Message
        this.successMessage = page.locator('body');
    }

    // =====================================================
    // OPEN REGISTER PAGE
    // =====================================================

    async openRegisterPage() {

        await this.page.goto(
            'https://parabank.parasoft.com/parabank/register.htm'
        );
    }

    // =====================================================
    // ENTER FIRST NAME
    // =====================================================

    async enterFirstName(firstName) {

        await this.firstName.fill( firstName);
    }

    // =====================================================
    // ENTER LAST NAME
    // =====================================================

    async enterLastName(lastName) {

        await this.lastName.fill( lastName);
    }

    // =====================================================
    // ENTER ADDRESS
    // =====================================================

    async enterAddress(address) {

        await this.address.fill(address);
    }

    // =====================================================
    // ENTER CITY
    // =====================================================

    async enterCity(city) {

        await this.city.fill( city);
    }

    // =====================================================
    // ENTER STATE
    // =====================================================

    async enterState(state) {

        await this.state.fill(state);
    }

    // =====================================================
    // ENTER ZIP CODE
    // =====================================================

    async enterZipCode(zipCode) {

        await this.zipCode.fill( zipCode);
    }

    // =====================================================
    // ENTER PHONE NUMBER
    // =====================================================

    async enterPhoneNumber(phoneNumber) {

        await this.phoneNumber.fill( phoneNumber);
    }

    // =====================================================
    // ENTER SSN
    // =====================================================

    async enterSSN(ssn) {

        await this.ssn.fill( ssn);
    }

    // =====================================================
    // ENTER USERNAME
    // =====================================================

    async enterUsername(username) {

        await this.username.fill( username);
    }

    // =====================================================
    // ENTER PASSWORD
    // =====================================================

    async enterPassword(password) {

        await this.password.fill( password);
    }

    // =====================================================
    // ENTER CONFIRM PASSWORD
    // =====================================================

    async enterConfirmPassword(password) {

        await this.confirmPassword.fill(password);
    }

    // =====================================================
    // CLICK REGISTER BUTTON
    // =====================================================

    async clickRegisterButton() {

        await this.registerButton.click();
    }

    // =====================================================
    // COMPLETE REGISTRATION
    // =====================================================

    async registerUser(user) {

        await this.enterFirstName(user.firstName);

        await this.enterLastName(user.lastName );

        await this.enterAddress( user.address);

        await this.enterCity(user.city);

        await this.enterState(user.state);

        await this.enterZipCode(user.zipCode);

        await this.enterPhoneNumber( user.phoneNumber);

        await this.enterSSN(user.ssn);

        await this.enterUsername(user.username);

        await this.enterPassword(user.password);

        await this.enterConfirmPassword(user.password);

        await this.clickRegisterButton();
    }
}

// Export Class
export default RegisterPage;