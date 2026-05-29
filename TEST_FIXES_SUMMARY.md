# Test Environment Setup & CI/CD Fixes

## Summary of Issues Fixed

### 1. **Headless Mode Issue** ❌ → ✅
   - **Problem**: `headless: false` was set globally, causing tests to fail on GitHub Actions (no display server)
   - **Fix**: Changed to `headless: !!process.env.CI` - runs in headless mode on CI, headed on local
   - **File**: `playwright.config.js`

### 2. **slowMo Performance Issue** ❌ → ✅
   - **Problem**: Global `slowMo: 1000` (1 second delay per action) caused timeout failures
   - **Fix**: Changed to `slowMo: process.env.CI ? 0 : 500` - 500ms local, 0ms on CI
   - **File**: `playwright.config.js`

### 3. **Timeout Configuration** ❌ → ✅
   - **Problem**: Fixed timeout of 60 seconds too tight when combined with slowMo and retries
   - **Fix**: Changed to `timeout: process.env.CI ? 120000 : 60000` (120s on CI, 60s locally)
   - **File**: `playwright.config.js`

### 4. **Retry Configuration** ❌ → ✅
   - **Problem**: 2 retries on CI with slowMo caused excessive delays
   - **Fix**: Reduced to `retries: process.env.CI ? 1 : 0`
   - **File**: `playwright.config.js`

### 5. **Fixture Syntax Error** ❌ → ✅
   - **Problem**: `findTransactionFixture.js` had malformed export statement
   - **Fix**: Fixed export syntax: `export { expect };`
   - **File**: `fixtures/findTransactionFixture.js`

### 6. **Hardcoded URLs and Credentials** ❌ → ✅
   - **Problem**: URLs and credentials hardcoded throughout tests
   - **Fix**: Created `config/test-config.js` for centralized configuration
   - **Files**: All test files, fixtures, and pages updated to use config

### 7. **Missing Navigation Waits** ❌ → ✅
   - **Problem**: Pages not waiting for network idle before proceeding
   - **Fix**: Added `{ waitUntil: 'networkidle', timeout: navigationTimeout }` to all page.goto() calls
   - **Files**: All fixtures and test files updated

### 8. **API Endpoint Hardcoding** ❌ → ✅
   - **Problem**: API tests used hardcoded account/customer IDs that might not exist
   - **Fix**: Made IDs parameterizable via environment variables
   - **File**: `pages/ApiPage.js`

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File (Optional for Local Testing)
```bash
cp .env.example .env
```

Update `.env` with your environment-specific values if needed:
```
BASE_URL=https://parabank.parasoft.com/parabank
TEST_USERNAME=john
TEST_PASSWORD=demo
TEST_ACCOUNT_ID=13344
TEST_CUSTOMER_ID=12212
```

### 3. Run Tests Locally
```bash
npm test
```

### 4. Run Tests in CI Mode
```bash
npm run test:ci
```

### 5. Generate Allure Report
```bash
npm run allure:generate
```

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `BASE_URL` | https://parabank.parasoft.com/parabank | Application base URL |
| `TEST_USERNAME` | john | Username for login tests |
| `TEST_PASSWORD` | demo | Password for login tests |
| `TEST_ACCOUNT_ID` | 13344 | Account ID for API tests |
| `TEST_CUSTOMER_ID` | 12212 | Customer ID for API tests |
| `CI` | (not set) | Set by GitHub Actions |

## Configuration Files

### `playwright.config.js`
- Main test configuration
- Sets timeouts, retries, headless mode based on CI environment
- Configures reporters (HTML, list, allure-playwright)

### `config/test-config.js`
- Centralized test configuration
- Defines endpoints, timeouts, credentials
- Can be imported by all test files and fixtures

### `.env.example`
- Template for environment variables
- Copy to `.env` for local customization

## GitHub Actions Workflow

The CI/CD workflow (`playwright.yml`) now:
1. ✅ Uses sharding to distribute tests across 3 workers
2. ✅ Runs with `CI=true` environment variable
3. ✅ Automatically uses headless mode
4. ✅ No slowMo delays in CI
5. ✅ Increased timeout for network operations
6. ✅ Collects Allure results from all shards
7. ✅ Merges results and generates report
8. ✅ Deploys to GitHub Pages on main/master branch

## Common Issues & Solutions

### Issue: Tests pass locally but fail on GitHub
**Solution**: Ensure environment variables are set in GitHub Actions secrets or check CI detection logic

### Issue: Timeouts during navigation
**Solution**: Increase `navigationTimeout` in `config/test-config.js`

### Issue: API tests fail with 404
**Solution**: Verify `TEST_ACCOUNT_ID` and `TEST_CUSTOMER_ID` exist in your environment

### Issue: Authentication fixture fails
**Solution**: Verify `TEST_USERNAME` and `TEST_PASSWORD` are correct for your environment

## Performance Metrics

| Setting | Local | CI |
|---------|-------|-----|
| Headless | false | true |
| slowMo | 500ms | 0ms |
| Retries | 0 | 1 |
| Workers | 4 | 1 |
| Timeout | 60s | 120s |

This ensures:
- Fast local development with visual feedback
- Reliable CI execution with adequate timeouts and retry logic
