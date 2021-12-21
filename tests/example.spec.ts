import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Matching
  await expect(page.locator('.status')).toHaveText('Submitted');

  // toBeChecked
  await expect(page.locator('.subscribe')).toBeChecked();

  // toBeDisabled
  await expect(page.locator('button.submit')).toBeDisabled();
  
  // toBeEditable
  await expect(page.locator('input')).toBeEditable();

  // toBeEmpty
  await expect(page.locator('div.warning')).toBeEmpty();

  // toBeEnabled
  await expect(page.locator('button.submit')).toBeEnabled();

  // toBeFocused
  await expect(page.locator('input')).toBeFocused();

  // toBeHidden
  await expect(page.locator('.my-element')).toBeHidden();

  // toBeVisible
  await expect(page.locator('.my-element')).toBeVisible();

  // toContainText
  await expect(page.locator('.title')).toContainText('substring');
  await expect(page.locator('.title')).toContainText(/\d messages/);

  // toContainText list
  await expect(page.locator('list > .list-item')).toContainText(['Text 1', 'Text 4', 'Text 5']);

  // toHaveAttribute
  await expect(page.locator('input')).toHaveAttribute('type', 'text');

  // toHaveClass
  await expect(page.locator('#component')).toHaveClass(/selected/);
  await expect(page.locator('#component')).toHaveClass(['component', 'component selected', 'component']);

  // toHaveCount
  await expect(page.locator('list > .component')).toHaveCount(3);

  // toHaveCSS
  await expect(page.locator('button')).toHaveCSS('display', 'flex');

  // toHaveId
  await expect(page.locator('input')).toHaveId('lastname');

  // toHaveJSProperty
  await expect(page.locator('.component')).toHaveJSProperty('loaded', true);
  
  // toHaveText
  await expect(page.locator('.title')).toHaveText(/Welcome, Test User/);
  await expect(page.locator('.title')).toHaveText(/Welcome, .*/);

  // toHaveText list
  await expect(page.locator('list > .component')).toHaveText(['Text 1', 'Text 2', 'Text 3']);

  // toHaveValue
  await expect(page.locator('input[type=number]')).toHaveValue(/[0-9]/);

  // toHaveTitle
  await expect(page).toHaveTitle(/.*checkout/);

  // toHaveURL
  await expect(page).toHaveURL(/.*checkout/);

  // toMatchSnapshot
  expect(await page.screenshot()).toMatchSnapshot('landing-page.png');
  expect(await page.screenshot()).toMatchSnapshot('landing-page.png', { threshold: 0.3 });
  expect(await page.screenshot()).toMatchSnapshot(['landing', 'step2.png']);
  expect(await page.screenshot()).toMatchSnapshot(['landing', 'step3.png']);

});

// https://playwright.dev/docs/test-assertions