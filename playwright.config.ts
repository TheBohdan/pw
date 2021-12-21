import { devices, PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    use: {
        // headless: false,
    },
    projects: [
        {
            name: 'Desktop Chromium',
            use: {
                browserName: 'chromium',
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: 'Desktop Safari',
            use: {
                browserName: 'webkit',
                viewport: { width: 1280, height: 720 },
            }
        },
        {
            name: 'Desktop Firefox',
            use: {
                browserName: 'firefox',
                viewport: { width: 1280, height: 720 },
            }
        },
        {
            name: 'Mobile Chrome',
            use: devices['Pixel 5'],
        },
        {
            name: 'Mobile Safari',
            use: devices['iPhone 12'],
        }
    ]
};
export default config;
// npx playwright test --project "Mobile Safari" 