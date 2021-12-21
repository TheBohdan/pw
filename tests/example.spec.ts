import { test, expect, devices } from '@playwright/test';

const Pixel3 = devices['Pixel 3 landscape'];

test.use({
  ...Pixel3,
  colorScheme: 'dark',
  headless: false,
  trace: 'retry-with-trace',
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

  await page.click('button:has-text("Rimani nella versione web")');

  await Promise.all([
    page.waitForNavigation(),
    page.click('.VYmeTd')
  ]);

  await page.pause();

});