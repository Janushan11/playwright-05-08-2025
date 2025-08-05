import { test, expect } from '@playwright/test';

test('demo login test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');
    await page.getByRole('textbox', { name: 'Enter your username' }).fill('gbgb');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('brtgbn');
    await page.getByRole('link', { name: 'Sign in' }).click();

    // Use expect to avoid warning
    await expect(page.getByText('Your Dashboard')).toBeVisible();
});
