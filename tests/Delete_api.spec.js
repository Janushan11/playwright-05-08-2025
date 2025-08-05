import { test, expect } from '@playwright/test';

test('DELETE demo test - JSONPlaceholder', async ({ request }) => {
    const response = await request.delete('https://jsonplaceholder.typicode.com/posts/1');
    console.log('Status:', response.status());
    expect(response.status()).toBe(200); // JSONPlaceholder returns 200 even for DELETE
});
