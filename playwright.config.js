// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://www.youtube.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    launchOptions: {
      args: [
        '--no-proxy-server',
        '--disable-features=NetworkService',
      ],
      env: {
        NO_PROXY: '*',
        no_proxy: '*',
      },
    },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
