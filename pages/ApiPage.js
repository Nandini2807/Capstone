import { baseURL, testUsername, testPassword, apiTimeout } from '../config/test-config.js';

export default class ApiPage {

    constructor(request) {

        this.request = request;

        this.baseURL = `${baseURL}/services/bank`;
        
        // Default account/customer IDs (can be overridden in tests)
        this.defaultAccountId = process.env.TEST_ACCOUNT_ID || '13344';
        this.defaultCustomerId = process.env.TEST_CUSTOMER_ID || '12212';
    }

    // =====================================================
    // GET ACCOUNT DETAILS
    // =====================================================

    async getAccountDetails(accountId = this.defaultAccountId) {

        return await this.request.get( `${this.baseURL}/accounts/${accountId}`, {
            timeout: apiTimeout
        });
    }

    // =====================================================
    // GET CUSTOMER DETAILS
    // =====================================================

    async getCustomerDetails(customerId = this.defaultCustomerId) {

        return await this.request.get(  `${this.baseURL}/customers/${customerId}`, {
            timeout: apiTimeout
        });
    }

    // =====================================================
    // INVALID ENDPOINT
    // =====================================================

    async getInvalidEndpoint() {

        return await this.request.get(  `${this.baseURL}/invalid`, {
            timeout: apiTimeout
        });
    }

    // =====================================================
    // LOGIN API
    // =====================================================

    async loginAPI(username = testUsername, password = testPassword) {

        return await this.request.get( `${this.baseURL}/login/${username}/${password}`, {
            timeout: apiTimeout
        });
    }

    // =====================================================
    // GET RESPONSE BODY
    // =====================================================

    async getResponseBody(accountId = this.defaultAccountId) {

        return await this.request.get( `${this.baseURL}/accounts/${accountId}`, {
            timeout: apiTimeout
        });
    }

    // =====================================================
    // GET HEADERS
    // =====================================================

    async getHeaders(accountId = this.defaultAccountId) {
          return await this.request.get( `${this.baseURL}/accounts/${accountId}`, {
              timeout: apiTimeout
          });
    }

    // =====================================================
    // GET RESPONSE TIME
    // =====================================================

    async getResponseTime(accountId = this.defaultAccountId) {

        const startTime = Date.now();

        const response = await this.request.get( `${this.baseURL}/accounts/${accountId}`, {
            timeout: apiTimeout
        });

        const endTime = Date.now();

        const responseTime = endTime - startTime;

        return {
            response,
            responseTime
        };
    }
}