import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.use({
  headless: false,
  browserName: 'chromium'
})

test('basic test', async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate();
  await home.search('page object');
  await expect(page).toHaveURL('https://playwright.dev/docs/pom');
  expect(await home.pageMainHeading.textContent()).toEqual('Page Object Models');
});
