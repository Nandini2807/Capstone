export class TransferPage {

    constructor(page) {

        this.page = page;

        this.transferLink =
            page.locator('a[href*="transfer"]');

        this.amountInput =
            page.locator('#amount');

        this.fromAccount =
            page.locator('#fromAccountId');

        this.toAccount =
            page.locator('#toAccountId');

        this.transferButton =
            page.locator('input[value="Transfer"]');

        this.successMessage =
            page.locator('#showResult');

        this.formContainer =
            page.locator('#rightPanel');

        this.body =
            page.locator('body');
    }

    // =====================================================
    // OPEN TRANSFER PAGE
    // =====================================================

    async openTransferPage() {

        await this.transferLink.click();
    }

    // =====================================================
    // ENTER AMOUNT
    // =====================================================

    async enterAmount(amount) {

        await this.amountInput.fill(amount);
    }

    // =====================================================
    // SELECT ACCOUNTS
    // =====================================================

    async selectAccounts() {

        await this.fromAccount.selectOption({ index: 0 });

        await this.toAccount.selectOption({ index: 1 });
    }

    // =====================================================
    // CLICK TRANSFER
    // =====================================================

    async clickTransfer() {

        await this.transferButton.click();
    }

    // =====================================================
    // TRANSFER FUNDS
    // =====================================================

    async transferFunds(amount) {

        await this.enterAmount(amount);

        await this.selectAccounts();

        await this.clickTransfer();
    }
}