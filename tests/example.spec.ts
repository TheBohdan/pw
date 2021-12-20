import { test, expect } from '@playwright/test';

test.use({ headless: false });

test.describe('feature foo', () => {
    
  test.beforeAll(async ({}) => {
    console.log('hook beforeAll');
  });

  test.beforeEach(async ({page}) =>  {
    console.log('hook beforeEach');
    await page.goto('https://playwright.dev/');
  });

  test('my test', async ({ page }) => {
    console.log('hook test');
    await expect(page).toHaveURL('https://playwright.dev/');
  });

  test.afterEach(async () =>  {
    console.log('hook afterEach');
  });

  test.afterAll(async () =>  {
    console.log('hook afterAll');
  });
  
});
