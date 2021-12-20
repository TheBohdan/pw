import { test, expect } from '@playwright/test';

test.use({
  headless: false,
  geolocation: {
    latitude: 41.890221,
    longitude: 12.492348
  },
  permissions: ['geolocation'],
  locale: 'it-IT',
  timezoneId: 'Europe/Rome'
});

test('test', async ({ page }) => {

  await page.goto('https://www.google.com/maps');

  await page.goto('https://www.google.com/maps/@49.8441213,24.0680316,13z');

  await Promise.all([
    page.waitForNavigation(),
    page.click('[aria-label="La tua posizione"]')
  ]);

});