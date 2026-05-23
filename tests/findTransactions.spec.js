
import { test, expect }
from '../fixtures/findTransactionFixture';

// ======================================================
// HELPER FUNCTION (POLL ASSERTION)
// ======================================================

const expectResultVisible =
async (findTransactionsPage) => {

    await expect.poll(async () => {

        return await findTransactionsPage
            .transactionResult
            .isVisible();

    }, {
        timeout: 8000,
        intervals: [500, 1000, 2000]
    }).toBe(true);
};

// ======================================================
// 1. SEARCH BY VALID TRANSACTION ID
// ======================================================

test('@smoke Search By Transaction ID',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByTransactionId('11111');

    await expectResultVisible(
        findTransactionsPage
    );
});

// ======================================================
// 2. INVALID TRANSACTION ID
// ======================================================
test('@negative Invalid Transaction ID',
async ({ findTransactionsPage }) => {

    test.slow();

    await findTransactionsPage.open();

    // Enter invalid transaction ID
    await findTransactionsPage
        .searchByTransactionId('99999999');

    // Verify user remains on same page
    await expect(
        findTransactionsPage.page
    ).toHaveURL(/findtrans/);

    // Verify entered value still exists
    await expect(
        findTransactionsPage.transactionIdInput
    ).toHaveValue('99999999');
   });

// ======================================================
// 3. SEARCH BY DATE
// ======================================================

test('@smoke Search By Date',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByDate('2025-01-01');

    await expectResultVisible(
        findTransactionsPage
    );
});

// ======================================================
// 4. INVALID DATE FORMAT
// ======================================================

test('@negative Invalid Date',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByDate('abcd');

    // Poll assertion
    await expect.poll(async () => {

        return await findTransactionsPage
            .dateInput
            .inputValue();

    }).toContain('abcd');

    // Soft assertion
    await expect.soft(
        findTransactionsPage.dateInput
    ).toBeVisible();
});
// ======================================================
// 5. SEARCH BY AMOUNT
// ======================================================

test('@smoke Search By Amount',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByAmount('100');

    await expectResultVisible(
        findTransactionsPage
    );
});

// ======================================================
// 6. INVALID AMOUNT
// ======================================================

test('@negative Invalid Amount',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByAmount('abc');

    await expect.poll(async () => {

        return await findTransactionsPage.page
            .locator('body')
            .innerText();

    }).not.toContain('Transaction Results');
});

// ======================================================
// 7. EMPTY TRANSACTION SEARCH
// ======================================================

test('@negative Empty Search',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .findByIdButton
        .first()
        .click();

    await expect.poll(async () => {

        return await findTransactionsPage.page
            .locator('body')
            .innerText();

    }).toContain('Find Transactions');
});

// ======================================================
// 8. UI VALIDATION
// ======================================================

test('@ui UI Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await expect.soft(
        findTransactionsPage.transactionIdInput
    ).toBeVisible();

    await expect.soft(
        findTransactionsPage.dateInput
    ).toBeVisible();

    await expect.soft(
        findTransactionsPage.amountInput
    ).toBeVisible();
});

// ======================================================
// 9. TRANSACTION TABLE VALIDATION
// ======================================================

test('@regression Transaction Table Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByAmount('100');

    await findTransactionsPage
        .verifyTransactionTableVisible();
});

// ======================================================
// 10. PAGE NAVIGATION VALIDATION
// ======================================================

test('@smoke Navigation Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await expect(
        findTransactionsPage.page
    ).toHaveURL(/findtrans/);
});

// ======================================================
// 11. SESSION PERSISTENCE
// ======================================================

test('@regression Session Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.page.reload();

    await findTransactionsPage.open();

    await expect(
        findTransactionsPage.transactionIdInput
    ).toBeVisible();
});

// ======================================================
// 12. MULTIPLE SEARCH VALIDATION
// ======================================================

test('@regression Multiple Search',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByAmount('100');

    await findTransactionsPage
        .searchByDate('2025-01-01');

    await expectResultVisible(
        findTransactionsPage
    );
});

// ======================================================
// 13. STEP ANNOTATION TEST
// ======================================================

test('@smoke Step Validation',
async ({ findTransactionsPage }) => {

    await test.step('Open Find Transaction Page',
    async () => {

        await findTransactionsPage.open();
    });

    await test.step('Search By Amount',
    async () => {

        await findTransactionsPage
            .searchByAmount('100');
    });

    await test.step('Verify Results',
    async () => {

        await expectResultVisible(
            findTransactionsPage
        );
    });
});

// ======================================================
// 14. TIMEOUT ANNOTATION
// ======================================================

test('@regression Timeout Validation',
async ({ findTransactionsPage }) => {

    test.setTimeout(60000);

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByTransactionId('11111');

    await expectResultVisible(
        findTransactionsPage
    );
});

// ======================================================
// 15. FIXME TEST CASE
// ======================================================

test.fixme(
'@fixme Backend Issue Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage
        .searchByAmount('999999');

    await expectResultVisible(
        findTransactionsPage
    );
});