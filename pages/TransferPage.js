export class TransferPage {
    constructor(page) {
        this.page = page;

        // Locators
        this.transferLink = page.locator('a[href*="transfer"]');
        this.amountInput = page.locator('#amount');
        this.fromAccount = page.locator('#fromAccountId');
        this.toAccount = page.locator('#toAccountId');
        this.transferButton = page.locator('input[value="Transfer"]');

        this.successMessage = page.locator('#showResult');
        this.errorMessage = page.locator('.error');
        this.formContainer = page.locator('#rightPanel');
    }

    async openTransferPage() {
        await this.transferLink.click();
    }

    async enterAmount(amount) {
        await this.amountInput.fill(amount);
    }

    async selectAccounts() {
        await this.fromAccount.selectOption({ index: 0 });
        await this.toAccount.selectOption({ index: 1 });
    }

    async clickTransfer() {
        await this.transferButton.click();
    }

    async transferFunds(amount) {
        await this.enterAmount(amount);
        await this.selectAccounts();
        await this.clickTransfer();
    }
}