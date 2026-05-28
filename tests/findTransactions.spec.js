import { test, expect }
from '../fixtures/findTransactionFixture';

// ======================================================
// HELPER FUNCTION
// ======================================================

const expectResultVisible =async (findTransactionsPage) => {

    await expect(  findTransactionsPage.transactionResult  ).toBeVisible({
        timeout: 15000
    });
};

// ======================================================
// 1. SEARCH BY VALID TRANSACTION ID
// ======================================================

test('@smoke Search By Transaction ID',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage .searchByTransactionId('11111');

    await expect(
        findTransactionsPage.transactionIdInput
    ).toHaveValue('11111');
});

// ======================================================
// 2. INVALID TRANSACTION ID
// ======================================================

test('@negative Invalid Transaction ID',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage  .searchByTransactionId('99999999');

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

    await findTransactionsPage .searchByDate('2025-01-01');

    await expect(  findTransactionsPage.dateInput ).toHaveValue('2025-01-01');
});

// ======================================================
// 4. INVALID DATE FORMAT
// ======================================================

test('@negative Invalid Date',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage .searchByDate('abcd');

    await expect(
        findTransactionsPage.dateInput
    ).toHaveValue('abcd');
});

// ======================================================
// 5. SEARCH BY AMOUNT
// ======================================================

test('@smoke Search By Amount',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage .searchByAmount('100');

    await expect(
        findTransactionsPage.amountInput
    ).toHaveValue('100');
});

// ======================================================
// 6. INVALID AMOUNT
// ======================================================

test('@negative Invalid Amount',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage.searchByAmount('abc');

    await expect(
        findTransactionsPage.amountInput
    ).toHaveValue('abc');
});

// ======================================================
// 7. EMPTY SEARCH
// ======================================================

test('@negative Empty Search',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage.findByIdButton.click();

    await expect(
        findTransactionsPage.transactionIdInput
    ).toBeVisible();
});

// ======================================================
// 8. UI VALIDATION
// ======================================================

test('@ui UI Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await expect(findTransactionsPage.transactionIdInput ).toBeVisible();

    await expect(  findTransactionsPage.dateInput ).toBeVisible();

    await expect(  findTransactionsPage.amountInput).toBeVisible();
});

// ======================================================
// 9. TRANSACTION TABLE VALIDATION
// ======================================================

test('@regression Transaction Table Validation',

async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage .searchByAmount('100');

    await findTransactionsPage.page.waitForTimeout(3000);

    await expect(
        findTransactionsPage.page .locator('body') ).toContainText(  'Transaction' );
});
// ======================================================
// 10. NAVIGATION VALIDATION
// ======================================================

test('@smoke Navigation Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await expect(
        findTransactionsPage.page
    ).toHaveURL(/findtrans/);
});

// ======================================================
// 11. SESSION VALIDATION
// ======================================================

test('@regression Session Validation',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage.page.reload();

    await expect(
        findTransactionsPage.transactionIdInput).toBeVisible();
});

// ======================================================
// 12. MULTIPLE SEARCH
// ======================================================

test('@regression Multiple Search',
async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage.searchByAmount('100');

    await findTransactionsPage.open();

    await findTransactionsPage .searchByDate('2025-01-01');

    await expect(
        findTransactionsPage.dateInput
    ).toHaveValue('2025-01-01');
});

// ======================================================
// 13. STEP VALIDATION
// ======================================================

test('@smoke Step Validation',
async ({ findTransactionsPage }) => {

    await test.step('Open Page', async () => {

            await findTransactionsPage.open();
        }
    );

    await test.step(  'Search Amount', async () => {

            await findTransactionsPage .searchByAmount('100');
        }
    );

    await test.step( 'Verify', async () => {

            await expect( findTransactionsPage.amountInput ).toHaveValue('100');
        }
    );
});

// ======================================================
// 14. TIMEOUT VALIDATION
// ======================================================

test('@regression Timeout Validation',
async ({ findTransactionsPage }) => {

    test.setTimeout(60000);

    await findTransactionsPage.open();

    await findTransactionsPage.searchByTransactionId('11111');

    await expect(
        findTransactionsPage.transactionIdInput
    ).toHaveValue('11111');
});

// ======================================================
// 15. FIXME
// ======================================================

test.fixme(
'@fixme Backend Issue Validation',

async ({ findTransactionsPage }) => {

    await findTransactionsPage.open();

    await findTransactionsPage.searchByAmount('999999');
});