// Environment Configuration
const baseURL = process.env.BASE_URL || 'https://parabank.parasoft.com/parabank';
const testUsername = process.env.TEST_USERNAME || 'john';
const testPassword = process.env.TEST_PASSWORD || 'demo';

// Timeouts
const navigationTimeout = 30000; // 30s for page navigation
const elementTimeout = 15000;   // 15s for element visibility
const apiTimeout = 10000;       // 10s for API calls

module.exports = {
  baseURL,
  testUsername,
  testPassword,
  navigationTimeout,
  elementTimeout,
  apiTimeout,
  
  // Common endpoints
  endpoints: {
    login: `${baseURL}/index.htm`,
    register: `${baseURL}/register.htm`,
    accounts: `${baseURL}/overview.htm`,
    openAccount: `${baseURL}/openaccount.htm`,
    transferFunds: `${baseURL}/transfer.htm`,
    billPay: `${baseURL}/billpay.htm`,
    findTransactions: `${baseURL}/findtransactions.htm`,
    api: `${baseURL}/services/bank`
  }
};
