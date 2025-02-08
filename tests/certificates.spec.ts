// @ts-check
import { test, expect } from '@playwright/test';
import { certificateList } from '../app/_constants/certificates';

test.describe('certificate tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  certificateList.map((certificate) => {
    test(`check ${certificate.name} visibility`, async ({ page }) => {
      await expect(page.getByRole('link', { name: certificate.name })).toBeVisible();
    });

    test(`check ${certificate.name} click`, async ({ page }) => {
      await page.getByRole('link', { name: certificate.name }).click();
      const pagePromise = page.waitForEvent('popup');
      const newTab = await pagePromise;
      await newTab.waitForLoadState();

      // for webkit popups, sometimes the browser adds hashes on the URL
      // we will be removing the hashes first, then assert
      const newTabUrlWithoutHashes = newTab.url().split('#')[0];
      expect(newTabUrlWithoutHashes).toEqual(certificate.url);
    });
  });
});