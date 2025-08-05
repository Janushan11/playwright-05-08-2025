// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests', // folder where your tests are stored
    timeout: 30 * 1000, // timeout per test (30 seconds)
    expect: {
        timeout: 5000, // timeout for expect() assertions
    },
    fullyParallel: true, // run tests in parallel if possible
    retries: 2, // retry failed tests 2 times

    reporter: [['list'], ['html']], // terminal + HTML report

    use: {
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',
        baseURL: 'https://demo.applitools.com/', // optional base URL
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true,
        actionTimeout: 0,
    },

    // 🔍 Optional: run tests across Chromium, Firefox, and WebKit
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
