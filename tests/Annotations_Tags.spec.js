const { test, expect } = require('@playwright/test');

// 01: Skipping a test
test.skip('skip this test', async ({ page }) => {
    // This test is skipped and will not run
    await page.goto('https://example.com');
    console.log('This will not be logged');
});

// 02: Marking a test to expect failure (but still runs)
test('not yet ready', async ({ page }) => {
    test.fail(); // This tells Playwright we expect this test to fail
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Wrong title'); // Intentionally wrong
});

// 03: Test to be fixed – aborts and is not run
test.fixme('test to be fixed', async ({ page }) => {
    await page.goto('https://example.com');
    // This will not run; Playwright marks it as "FIXME"
});

// 04: Slow test (triples timeout)
test('slow test', async ({ page }) => {
    test.slow(); // Extends timeout for this test
    await page.goto('https://example.com');
    await page.waitForTimeout(5000); // Simulate slow operation
    expect(await page.title()).toContain('Example');
});

// 05: Only run this specific test
test.only('focus this test', async ({ page }) => {
    await page.goto('https://example.com');
    expect(await page.title()).toBe('Example Domain');
});
