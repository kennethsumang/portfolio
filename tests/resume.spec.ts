// @ts-check
import { test, expect } from '@playwright/test';

test.describe('resume tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  test('check if resume button is visible', async ({ page }) => {
    await expect(page.getByRole('button', { name: 'Resume' })).toBeVisible();
  });

  test('check if resume button click opens the resume', async ({ page }) => {
    if (test.info().project.name === 'webkit') {
      const pagePromise = page.waitForEvent('popup');
      await page.getByRole('button', { name: 'Resume' }).click();
      const newTab = await pagePromise;
      await newTab.waitForLoadState();
      await expect(newTab).toHaveURL('about:blank');
    }

    // for some reason, I'm not sure what behavior chromium and firefox 
    // makes when opening a PDF file browser popup.
    // Will defer creating this test case for now.

    // if (test.info().project.name === "firefox" || test.info().project.name === "chromium") {
    //   const pagePromise = page.waitForEvent('download', { timeout: 60000 });
    //   await page.getByRole('button', { name: 'Resume' }).click();
    //   await page.route('**/*.pdf', async route => {
    //     const response = await route.fetch()
    //     await route.fulfill({
    //       response,
    //       headers: {
    //         ...response.headers(),
    //         'Content-Disposition': 'attachment',
    //       }
    //     });
    //   });

    //   const newTab = await pagePromise;
    //   expect(newTab.url()).toContain('resume.pdf');
    // }
  });
});