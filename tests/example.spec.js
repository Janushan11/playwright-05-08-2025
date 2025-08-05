const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await expect(page).toHaveTitle('Swag Labs');
});
