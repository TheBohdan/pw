import { test, expect } from '@playwright/test';

test.use({ headless: false });

// test.describe.parallel('feature foo', () => {
test.describe('feature foo', () => {
    
  test('test 1', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test('test 2', async ({ page }) => {
    // test.skip();
    await page.goto('https://playwright.dev/docs/next/intro');
    await expect(page).toHaveURL('https://playwright.dev/docs/next/intro');
  });

  test('test 3', async ({ page }) => {
    // test.fixme(); // not yet ready
    await page.goto('https://playwright.dev/docs/next/api/class-playwright');
    await expect(page).toHaveURL('https://playwright.dev/docs/next/api/class-playwright');
  });

//   test.only('test 4', async ({ page }) => {
//     await page.goto('https://playwright.dev/docs/intro');
//     await expect(page).toHaveURL('https://playwright.dev/docs/intro');
//   });

});
