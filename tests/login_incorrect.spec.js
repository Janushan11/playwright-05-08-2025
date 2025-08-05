import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/v1/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('abcdefg');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('hfcjhjvj');
  await page.getByRole('button', { name: 'LOGIN' }).click();
});