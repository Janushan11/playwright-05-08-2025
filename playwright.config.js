// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',               // folder where your tests are
    timeout: 30 * 1000,               // 30 seconds timeout per test
    expect: { timeout: 5000 },        // 5 seconds for expect assertions
    fullyParallel: true,              // run tests in parallel
    retries: 2,                      // retry failed tests twice

    reporter: [['list'], ['html']],   // terminal + HTML report

    outputDir: 'test-results/',       // folder to store videos, screenshots, traces

    use: {
        headless: true,                 // run in headless mode
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        actionTimeout: 0,

        screenshot: 'only-on-failure',  // screenshot only on failure
        video: 'on',                    // record video for all tests
        trace: 'on-first-retry',        // trace on first retry

        launchOptions: {
            slowMo: 500,                  // slow down actions by 500ms (optional)
        },
    },

    projects: [
        {
            name: 'Chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'Firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'WebKit',
            use: { browserName: 'webkit' },
        },
    ],
});
