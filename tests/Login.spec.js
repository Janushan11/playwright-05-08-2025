import { test} from '@playwright/test';

test('demo login test 1', async ({ page }) => {
    await page.goto('/'); // uses baseURL from config

    await page.getByRole('textbox', { name: 'Enter your username' }).fill('testuser');
    await page.getByRole('textbox', { name: 'Enter your password' }).fill('testpass');
    await page.getByRole('link', { name: 'Sign in' }).click();


});

test.only('demo login test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'Bhoomika rn' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
});

