// tests/Post_api_test.spec.js
import { test, expect } from '@playwright/test';

test('API POST demo test - JSONPlaceholder', async ({ request }) => {
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            title: 'morpheus',
            body: 'leader',
            userId: 1
        }
    });

    // Log full response
    console.log('Status:', response.status());
    const json = await response.json();
    console.log(json);

    expect(response.status()).toBe(201); // JSONPlaceholder returns 201 on fake POST
    expect(json).toHaveProperty('id');   // Fake post will return an ID
});
