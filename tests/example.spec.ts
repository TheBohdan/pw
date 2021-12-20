import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.google.com/');

  await page.click('[aria-label="Пошук"]');

  await page.fill('[aria-label="Пошук"]', 'playwright');

  await Promise.all([
    page.waitForNavigation(),
    page.press('[aria-label="Пошук"]', 'Enter')
  ]);

  await page.click('text=Playwright: Fast and reliable end-to-end testing for modern ...');
  await expect(page).toHaveURL('https://playwright.dev/');

});