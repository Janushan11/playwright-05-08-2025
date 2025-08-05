import { test, expect } from '@playwright/test';

test('Demo API PUT Request - JSONPlaceholder', async ({ request }) => {
    const response = await request.put("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            title: "Raghav",
            body: "teacher",
            userId: 1
        }
    });

    // Check status
    console.log('Status:', response.status());
    expect(response.status()).toBe(200); // JSONPlaceholder returns 200 for PUT

    // Check content
    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.title).toBe("Raghav");
    expect(responseBody.body).toBe("teacher");
});
