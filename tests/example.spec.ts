import { test } from '@playwright/test';

test.use({headless: false, screenshot: 'on', video: 'on', trace: 'on'});

test.beforeEach(async ({ context }) => {
  // Block any css requests for each test in this file.
  await context.route(/.css/, route => route.abort());
});

test('basic test', async ({ page }) => {
  // Block png and jpeg images.
  await page.route(/(png|jpeg|svg)$/, route => route.abort());
  await page.goto('https://playwright.dev');

});

// npx playwright show-trace ./test-results/tests-example-basic-test/trace.zip