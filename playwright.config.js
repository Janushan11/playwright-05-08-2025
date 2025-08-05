// playwright.config.js
const config = {
    retries: 2, // retry failed tests twice
    use: {
        headless: true, // run tests in headless mode
        screenshot: 'only-on-failure', // take screenshot only on failure
        video: 'retain-on-failure', // record video and keep only if test fails
        trace: 'on-first-retry', // record trace on first retry only
        // you can add other global options here, e.g. baseURL, viewport, etc.
    },
};

module.exports = config;
