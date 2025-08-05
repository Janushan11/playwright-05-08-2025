// Import the test and expect functions from the Playwright test runner
const { test, expect } = require('@playwright/test');

// Define a test group using "describe"
test.describe('Selector Examples', () => {

    // Define a test case
    test('should be able to log in using different selectors', async ({ page }) => {

        // Go to the specified URL
        await page.goto("https://www.saucedemo.com/");

        // Using an ID property to fill in the username field
        await page.locator('[id="user-name"]').fill("standard_user");

        // Using an ID property to fill in the password field
        await page.locator('[id="password"]').fill("secret_sauce");

        // Using a CSS selector to click the login button
        await page.locator('#login-button').click();

        // Verify that the login was successful by checking the URL
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

        // You can also use other selectors as shown in the original image
        // Here are some examples you could add as separate tests or parts of a single test:

        // Using XPath
        // await page.locator('//input[@name="login-button"]').click()

        // Using Text (less common for buttons but possible)
        // await page.locator('text=LOGIN').click();
    });
});