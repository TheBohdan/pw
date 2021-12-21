import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev');
  await page.click(".toggleTrack_32Fl"); // change color theme
  expect(await page.screenshot()).toMatchSnapshot('landing.png');
});

// npx playwright test --update-snapshots