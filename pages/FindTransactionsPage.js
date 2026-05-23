
import { expect } from '@playwright/test';

export default class FindTransactionsPage {

    constructor(page) {

        this.page = page;

        // ================= LOCATORS =================

        this.findTransactionLink =
            page.locator('text=Find Transactions');

        this.transactionIdInput =
            page.locator('#transactionId');

        this.findByIdButton =
            page.locator('button:has-text("Find Transactions")');

        this.dateInput =
            page.locator('#transactionDate');

        this.amountInput =
            page.locator('#amount');

        this.resultTable =
            page.locator('#transactionTable');

        this.noTransactionText =
            page.locator('text=No transactions found');

        this.transactionResult =
            page.locator('#rightPanel');

        this.errorMessage =
            page.locator('.error');
    }

    // ================= NAVIGATION =================

    async open() {

        await this.findTransactionLink.click();
    }

    // ================= ACTIONS =================

    async searchByTransactionId(id) {

        await this.transactionIdInput.fill(id);

        await this.findByIdButton.first().click();
    }

    async searchByDate(date) {

        await this.dateInput.fill(date);

        await this.findByIdButton.nth(1).click();
    }

    async searchByAmount(amount) {

        await this.amountInput.fill(amount);

        await this.findByIdButton.last().click();
    }

    // ================= VALIDATIONS =================

    async verifyResultVisible() {

        await expect(this.transactionResult)
            .toBeVisible();
    }

    async verifyNoTransactionMessage() {

        await expect(this.noTransactionText)
            .toBeVisible();
    }

    async verifyTransactionTableVisible() {

        await expect(this.resultTable)
            .toBeVisible();
    }
}