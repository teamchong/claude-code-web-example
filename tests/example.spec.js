// @ts-check
const { test, expect } = require('@playwright/test');

test('basic test to verify Playwright works', async ({ page }) => {
  // Navigate to example.com to verify basic functionality
  await page.goto('https://example.com');

  // Check the page title
  await expect(page).toHaveTitle(/Example Domain/);

  // Verify the heading exists
  const heading = page.locator('h1');
  await expect(heading).toBeVisible();
  await expect(heading).toHaveText('Example Domain');
});

test('verify Claude AI web loads', async ({ page }) => {
  // Test if claude.ai is accessible
  await page.goto('https://claude.ai');

  // Wait for page to load (basic check)
  await page.waitForLoadState('networkidle');

  // Take a screenshot for visual verification
  await page.screenshot({ path: 'claude-ai-homepage.png' });

  console.log('Claude AI page loaded successfully');
});
