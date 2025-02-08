// @ts-check
import { test, expect } from '@playwright/test';

test.describe('credits tests', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  test('if credits link visible', async ({ page }) => {
    await expect(page.getByText('Credits')).toBeVisible();
  });
  
  test('if clicking credits link opens credits dialog', async ({ page }) => {
    await page.getByText('Credits').click();
    await expect(page.getByRole('dialog', { name: 'Credits' })).toBeVisible();
  });
  
  test('if clicking the close button closes the credits dialog', async ({ page }) => {
    await page.getByText('Credits').click();
    await page.getByRole('dialog', { name: 'Credits' }).getByRole('button').click();
    await expect(page.getByRole('dialog', { name: 'Credits' })).toBeHidden();
  });
});

