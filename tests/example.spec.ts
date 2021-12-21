import { test } from '@playwright/test';

// Focus a test
test.only('focus this test', async ({ page }) => {
  // Run only focused tests in the entire project.
});


// Skip a test
test.skip('skip this test', async ({ page }) => {
  // This test is not run
});

// Conditionally skip a test
test('skip this test', async ({ page, browserName }) => {
  test.skip(browserName === 'firefox', 'Still working on it');
});

// Group tests
test.describe('two tests', () => {
  test('one', async ({ page }) => {
    // ...
  });

  test('two', async ({ page }) => {
    // ...
  });
});


// Tag tests // npx playwright test --grep @fast
test('Test login page @fast', async ({ page }) => {
  // ...
});

test('Test full report @slow', async ({ page }) => {
  // ...
});

// Conditionally skip a group of tests
test.describe('chromium only', () => {
  test.skip(({ browserName }) => browserName !== 'chromium', 'Chromium only!');

  test.beforeAll(async () => {
    // This hook is only run in Chromium.
  });

  test('test 1', async ({ page }) => {
    // This test is only run in Chromium.
  });

  test('test 2', async ({ page }) => {
    // This test is only run in Chromium.
  });
});

// Use fixme in beforeEach hook

test.beforeEach(async ({ page, isMobile }) => {
  test.fixme(isMobile, 'Settings page does not work in mobile yet');

  await page.goto('http://localhost:3000/settings');
});

test('user profile', async ({ page }) => {
  await page.click('text=My Profile');
  // ...
});