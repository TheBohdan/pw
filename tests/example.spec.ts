import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.click(".toggleButton_gllP"); // change color theme
  await page.waitForTimeout(3000);
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});

// npx playwright test --update-snapshots