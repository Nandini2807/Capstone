export default class ApiPage {

    constructor(request) {

        this.request = request;

        this.baseURL ='https://parabank.parasoft.com/parabank/services/bank';
    }

    // =====================================================
    // GET ACCOUNT DETAILS
    // =====================================================

    async getAccountDetails() {

        return await this.request.get( `${this.baseURL}/accounts/13344`);
    }

    // =====================================================
    // GET CUSTOMER DETAILS
    // =====================================================

    async getCustomerDetails() {

        return await this.request.get(  `${this.baseURL}/customers/12212`);
    }

    // =====================================================
    // INVALID ENDPOINT
    // =====================================================

    async getInvalidEndpoint() {

        return await this.request.get(  `${this.baseURL}/invalid` );
    }

    // =====================================================
    // LOGIN API
    // =====================================================

    async loginAPI() {

        return await this.request.get( `${this.baseURL}/login/john/demo`);
    }

    // =====================================================
    // GET RESPONSE BODY
    // =====================================================

    async getResponseBody() {

        return await this.request.get( `${this.baseURL}/accounts/13344`);
    }

    // =====================================================
    // GET HEADERS
    // =====================================================

    async getHeaders() {
          return await this.request.get( `${this.baseURL}/accounts/13344` );
    }

    // =====================================================
    // GET RESPONSE TIME
    // =====================================================

    async getResponseTime() {

        const startTime = Date.now();

        const response = await this.request.get( `${this.baseURL}/accounts/13344` );

        const endTime = Date.now();

        const responseTime = endTime - startTime;

        return {
            response,
            responseTime
        };
    }
}