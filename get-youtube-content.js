// Script to extract YouTube video information
const { chromium } = require('@playwright/test');

async function getYouTubeContent(videoId = '_AifxZGxwuk') {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  try {
    // Navigate to the YouTube video
    await page.goto(`https://www.youtube.com/watch?v=${videoId}`, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // Wait a bit for JavaScript to render content
    await page.waitForTimeout(3000);

    // Extract video information
    const videoInfo = await page.evaluate(() => {
      const title = document.querySelector('h1.ytd-video-primary-info-renderer')?.textContent?.trim() ||
                    document.querySelector('h1 yt-formatted-string')?.textContent?.trim() ||
                    document.querySelector('meta[name="title"]')?.content;

      const channel = document.querySelector('ytd-channel-name a')?.textContent?.trim() ||
                      document.querySelector('yt-formatted-string.ytd-channel-name a')?.textContent?.trim();

      const description = document.querySelector('ytd-expandable-video-description-body-renderer')?.textContent?.trim() ||
                         document.querySelector('meta[name="description"]')?.content;

      const views = document.querySelector('span.view-count')?.textContent?.trim();

      return {
        title,
        channel,
        description,
        views,
        url: window.location.href
      };
    });

    console.log('YouTube Video Information:');
    console.log('='.repeat(50));
    console.log(`Title: ${videoInfo.title}`);
    console.log(`Channel: ${videoInfo.channel}`);
    console.log(`Views: ${videoInfo.views}`);
    console.log(`\nDescription:\n${videoInfo.description}`);
    console.log('='.repeat(50));

    return videoInfo;
  } catch (error) {
    console.error('Error fetching YouTube content:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// Get video ID from command line args or use default
const videoId = process.argv[2] || '_AifxZGxwuk';

// Run the function
getYouTubeContent(videoId)
  .then(() => console.log('\nCompleted successfully'))
  .catch(error => {
    console.error('Failed:', error);
    process.exit(1);
  });
