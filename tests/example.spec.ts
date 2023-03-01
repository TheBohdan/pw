import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.click(".toggleButton_gllP"); // change color theme
  await page.waitForTimeout(15000);
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
  // expect(await page.screenshot()).toMatchSnapshot({ maxDiffPixelRatio: 0.02 });
});

// npx playwright test --update-snapshots