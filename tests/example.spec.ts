import { test } from '@playwright/test';

test.use({headless: false});

test.beforeEach(async ({ page }) => {
  // Block any css requests for each test in this file.
  await page.route(/.css/, route => route.abort());
});

test('basic test', async ({ page }) => {
  // Subscribe to 'request' and 'response' events.
  page.on('request', 
    request => console.log('>>', request.method(), request.url()));
  page.on('response', 
    response => console.log('<<', response.status(), response.url()));
  // Block png and jpeg images.
  await page.route(/(png|jpeg|svg)$/, route => route.abort());

  await page.goto('https://playwright.dev');

  // await page.pause();
});