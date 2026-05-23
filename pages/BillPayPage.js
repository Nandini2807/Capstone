export class BillPayPage {
  constructor(page) {
    this.page = page;

    // ========== LOCATORS ==========
    this.payee = page.locator('input[name="payee.name"]');
    this.address = page.locator('input[name="payee.address.street"]');
    this.city = page.locator('input[name="payee.address.city"]');
    this.state = page.locator('input[name="payee.address.state"]');
    this.zip = page.locator('input[name="payee.address.zipCode"]');
    this.phone = page.locator('input[name="payee.phoneNumber"]');

    this.account = page.locator('input[name="payee.accountNumber"]');
    this.verifyAccount = page.locator('input[name="verifyAccount"]');

    this.amount = page.locator('input[name="amount"]');

    this.sendBtn = page.locator('input[value="Send Payment"]');

    this.successMsg = page.locator('#billpayResult');
  }

  // ========== NAVIGATION ==========
  async open() {
    await this.page.click('text=Bill Pay');
  }

  // ========== ACTION ==========
  async fillForm(payee, amount) {
    await this.payee.fill(payee);
    await this.address.fill('Pune');
    await this.city.fill('Pune');
    await this.state.fill('MH');
    await this.zip.fill('411001');
    await this.phone.fill('9999999999');

    await this.account.fill('12345');
    await this.verifyAccount.fill('12345');

    await this.amount.fill(amount);
  }

  async submit() {
    await this.sendBtn.click();
  }
}