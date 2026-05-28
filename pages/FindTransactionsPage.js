import { expect } from '@playwright/test';

export class FindTransactionsPage {

    constructor(page) {

        this.page = page;

        this.findTransactionLink = page.locator('a[href*="findtrans"]');

        this.transactionIdInput = page.locator('#transactionId');

        this.findByIdButton = page.locator('button:has-text("Find Transactions")').first();

        this.dateInput = page.locator('#transactionDate');

        this.findByDateButton = page.locator('button:has-text("Find Transactions")').nth(1);

        this.amountInput = page.locator('#amount');

        this.findByAmountButton = page.locator('button:has-text("Find Transactions")').nth(2);

        this.transactionResult = page.locator('#transactionTable');

        this.transactionTable = page.locator('#transactionTable');
    }

    // ======================================================
    // OPEN PAGE
    // ======================================================

    async open() {

        await this.findTransactionLink.click();

        await this.page.waitForLoadState('domcontentloaded');
    }

    // ======================================================
    // SEARCH BY TRANSACTION ID
    // ======================================================

    async searchByTransactionId(id) {

        await this.transactionIdInput.fill(id);

        await this.findByIdButton.click();
    }

    // ======================================================
    // SEARCH BY DATE
    // ======================================================

    async searchByDate(date) {

        await this.dateInput.fill(date);

        await this.findByDateButton.click();
    }

    // ======================================================
    // SEARCH BY AMOUNT
    // ======================================================

    async searchByAmount(amount) {

        await this.amountInput.fill(amount);

        await this.findByAmountButton.click();
    }

    // ======================================================
    // VERIFY TABLE
    // ======================================================

    async verifyTransactionTableVisible() {

        await expect(this.transactionTable)
            .toBeVisible({
                timeout: 15000
            });
    }
}