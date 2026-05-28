import { expect }from '@playwright/test';
class OpenAccountPage {

    constructor(page) {

        // Store Page
        this.page = page;

        // Open New Account Link
        this.openAccountLink = page.locator('text=Open New Account'  );

        // Account Type Dropdown
        this.accountTypeDropdown = page.locator('#type');

        // From Account Dropdown
        this.fromAccountDropdown = page.locator('#fromAccountId' );

        // Open Account Button
        this.openAccountButton = page.locator('input[value="Open New Account"]');

        // Success Message
        this.successMessage = page.locator('#openAccountResult' );

        // New Account Number
        this.newAccountNumber = page.locator(  '#newAccountId');

        // Account Opened Heading
        this.accountOpenedText = page.getByRole('heading',  { name:  'Account Opened!' } );

        // Right Panel
        this.rightPanel = page.locator(  '#rightPanel' );
    }

    // =====================================================
    // GO TO OPEN ACCOUNT PAGE
    // =====================================================

  
    async gotoOpenAccountPage() {
    await this.openAccountLink.click();


    await this.page.waitForURL( '**/openaccount.htm',
        {
            timeout: 15000
        }
    );

    // Wait for dropdown visible
    await expect( this.accountTypeDropdown ).toBeVisible({  timeout: 15000});
}
    // =====================================================
    // SELECT ACCOUNT TYPE
    // =====================================================

    async selectAccountType(type) {

        await expect( this.accountTypeDropdown ).toBeVisible({timeout: 15000 });

        await this.accountTypeDropdown .selectOption(type);
    }

    // =====================================================
    // CLICK OPEN ACCOUNT BUTTON
    // =====================================================

    async clickOpenAccountButton() {

        await expect( this.openAccountButton).toBeVisible({  timeout: 15000 });

        await this.openAccountButton .click();
    }

    // =====================================================
    // OPEN NEW ACCOUNT
    // =====================================================

    async openNewAccount(type) {

        await this.page.goto( 'https://parabank.parasoft.com/parabank/openaccount.htm');

        await this.page.waitForLoadState(  'domcontentloaded');

        await expect( this.accountTypeDropdown).toBeVisible({
            timeout: 15000
        });

      
        await this.accountTypeDropdown .selectOption(type);

        await this.page.waitForTimeout( 1000 );

        await this.openAccountButton.click();
       
        await expect( this.successMessage).toContainText( 'Congratulations',
            {
                timeout: 20000
            }
        );


        await this.page.waitForTimeout(2000);
    }

    // =====================================================
    // VERIFY ACCOUNT OPENED
    // =====================================================

    async verifyAccountOpened() {
        await expect( this.successMessage).toContainText( 'Congratulations',
            {
                timeout: 20000
            }
        );
    }

    // =====================================================
    // VERIFY NEW ACCOUNT NUMBER
    // =====================================================

    async verifyNewAccountNumberVisible() {

        // Verify account number visible
        await expect(  this.newAccountNumber ).toBeVisible({
            timeout: 15000
        });
    }

    // =====================================================
    // VERIFY OPEN ACCOUNT BUTTON
    // =====================================================

    async verifyOpenAccountButtonVisible() {

        await expect(this.openAccountButton).toBeVisible({
            timeout: 15000
        });
    }

    // =====================================================
    // VERIFY ACCOUNT TYPE DROPDOWN
    // =====================================================

    async verifyDropdownVisible() {
        await expect(this.accountTypeDropdown ).toBeVisible({
            timeout: 15000
        });
    }

    // =====================================================
    // VERIFY FROM ACCOUNT DROPDOWN
    // =====================================================

    async verifyFromAccountDropdownVisible() {
        await expect( this.fromAccountDropdown  ).toBeVisible({
            timeout: 15000
        });
    }

    // =====================================================
    // VERIFY OPEN ACCOUNT URL
    // =====================================================

    async verifyOpenAccountURL() {
        await expect(this.page).toHaveURL(
            /openaccount.htm/,
            {
                timeout: 15000
            }
        );
    }

    // =====================================================
    // VERIFY UI
    // =====================================================

    async verifyUI() {
        await expect(this.rightPanel ).toBeVisible({  timeout: 15000 });
    }
}

export default OpenAccountPage;