// @ts-check
const { test, expect } = require('@playwright/test');

test('load Playwright Agents video 1', async ({ page }) => {
  // Navigate to the first YouTube video about Playwright Agents
  await page.goto('https://www.youtube.com/watch?v=_AifxZGxwuk');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Verify video title contains expected text
  const title = await page.title();
  expect(title).toContain('Playwright');

  // Take screenshot
  await page.screenshot({ path: 'playwright-agents-video-1.png' });

  console.log('Video 1 loaded:', title);
});

test('load Playwright Agents video 2', async ({ page }) => {
  // Navigate to the second YouTube video
  await page.goto('https://www.youtube.com/watch?v=HLegcP8qxVY');

  // Wait for page to load
  await page.waitForLoadState('networkidle');

  // Verify video title
  const title = await page.title();
  expect(title).toContain('Playwright');

  // Take screenshot
  await page.screenshot({ path: 'playwright-agents-video-2.png' });

  console.log('Video 2 loaded:', title);
});
