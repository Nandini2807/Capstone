import { test, expect } from '../fixtures/billPayFixture';

/* =====================================================
   HELPER (SOFT POLLING)
===================================================== */
const expectNoSuccess = async (billPayPage) => {
  await expect.poll(async () => {
    return await billPayPage.successMsg.isVisible();
  }, {
    timeout: 8000,
    intervals: [500, 1000, 2000]
  }).toBe(false);
};

/* =====================================================
   1. SMOKE - VALID PAYMENT
===================================================== */
test('@smoke Valid Bill Payment', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Electricity Board', '500');
  await billPayPage.submit();

  await expect.poll(() => billPayPage.successMsg.isVisible()).toBeTruthy();
});

/* =====================================================
   2. EMPTY PAYEE
===================================================== */
test('@negative Empty Payee', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('', '500');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   3. EMPTY AMOUNT
===================================================== */
test('@negative Empty Amount', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Electricity', '');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   4. INVALID AMOUNT
===================================================== */
test('@negative Invalid Amount', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Electricity', 'abc');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   5. NEGATIVE AMOUNT
===================================================== */
test('@negative Negative Amount', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Water Bill', '-100');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   6. ZERO AMOUNT
===================================================== */
test('@negative Zero Amount', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Gas Bill', '0');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   7. DECIMAL AMOUNT
===================================================== */
test('@regression Decimal Amount', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Internet', '123.45');
  await billPayPage.submit();

  await expect.poll(() => billPayPage.successMsg.isVisible()).toBeTruthy();
});

/* =====================================================
   8. SPECIAL CHARACTERS
===================================================== */
test('@negative Special Characters', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('@#$%', '500');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   9. MANDATORY FIELDS
===================================================== */
test('@ui Mandatory Fields', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   10. INSUFFICIENT BALANCE
===================================================== */
test('@regression Insufficient Balance', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Luxury Store', '999999');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   11. DUPLICATE PAYMENT
===================================================== */
test('@regression Duplicate Payment', async ({ billPayPage }) => {

  await billPayPage.open();

  await billPayPage.fillForm('Electricity', '500');
  await billPayPage.submit();

  await billPayPage.fillForm('Electricity', '500');
  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   12. PAYMENT CONFIRMATION
===================================================== */
test('@smoke Payment Confirmation', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Water Bill', '200');
  await billPayPage.submit();

  await expect.poll(() => billPayPage.successMsg.isVisible()).toBeTruthy();
});

/* =====================================================
   13. UI VALIDATION
===================================================== */
test('@ui UI Validation', async ({ billPayPage }) => {

  await billPayPage.open();

  await expect.poll(() => billPayPage.payee.isVisible()).toBeTruthy();
  await expect.poll(() => billPayPage.amount.isVisible()).toBeTruthy();
  await expect.poll(() => billPayPage.sendBtn.isVisible()).toBeTruthy();
});

/* =====================================================
   14. ACCOUNT VALIDATION
===================================================== */
test('@negative Account Validation', async ({ billPayPage }) => {

  await billPayPage.open();

  await billPayPage.account.fill('wrong');
  await billPayPage.verifyAccount.fill('wrong');

  await billPayPage.submit();

  await expectNoSuccess(billPayPage);
});

/* =====================================================
   15. END TO END FLOW
===================================================== */
test('@smoke End to End Bill Pay Flow', async ({ billPayPage }) => {

  await billPayPage.open();
  await billPayPage.fillForm('Internet Bill', '300');
  await billPayPage.submit();

  await expect.poll(() => billPayPage.successMsg.isVisible()).toBeTruthy();
});