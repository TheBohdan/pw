import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});


// npx playwright test --reporter=dot
// npx playwright test --reporter=html

// npx playwright show-report

// PLAYWRIGHT_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json
// PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit


// PLAYWRIGHT_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit