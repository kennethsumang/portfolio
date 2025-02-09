// @ts-check
import { test, expect } from '@playwright/test';

test.describe('navigation tests > non-mobile', () => {
  test.skip(() => test.info().project.name.includes('Mobile'), 'Testing only non-mobile browsers');

  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');
  });


  test('nav buttons visibility', async ({ page }) => {
    await expect(page.getByRole('banner').getByRole('button', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('button', { name: 'Skills' })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('button', { name: 'History' })).toBeVisible();
    await expect(page.getByRole('banner').getByRole('button', { name: 'Certificates' })).toBeVisible();
  });

  test('Home button click', async ({ page }) => {
    await page.getByRole('banner').getByRole('button', { name: 'Home' }).click();
    await expect(page.getByRole('heading', { name: 'Kenneth Sumang' })).toBeInViewport();
  });

  test('Skills button click', async ({ page }) => {
    await page.getByRole('banner').getByRole('button', { name: 'Skills' }).click();
    await expect(page.getByRole('heading', { name: 'My Skills' })).toBeInViewport();
  });

  test('History button click', async ({ page }) => {
    await page.getByRole('banner').getByRole('button', { name: 'History' }).click();
    await expect(page.getByRole('heading', { name: 'History' })).toBeInViewport();
  });

  test('Certificates button click', async ({ page }) => {
    await page.getByRole('banner').getByRole('button', { name: 'Certificates' }).click();
    await expect(page.getByRole('heading', { name: 'My Certificates' })).toBeInViewport();
  });
});

test.describe('navigation tests > mobile', () => {
  test.skip(() => !test.info().project.name.includes('Mobile'), 'Testing only mobile browsers');
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('http://localhost:3000/');
  });

  test('menu icon visibility', async ({ page }) => {
    await expect(page.getByRole('button').filter({ hasText: /^$/ })).toBeVisible();
  });

  test('menu icon click', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await expect(page.getByRole('button', { name: 'Home' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Skills' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'History' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Certificates' })).toBeVisible();
  });

  test('Home button click', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Home' }).click();
    await expect(page.getByRole('heading', { name: 'Kenneth Sumang' })).toBeInViewport();
  });

  test('Skills button click', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Skills' }).click();
    await expect(page.getByRole('heading', { name: 'My Skills' })).toBeInViewport();
  });

  test('History button click', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'History' }).click();
    await expect(page.getByRole('heading', { name: 'History' })).toBeInViewport();
  });

  test('Certificates button click', async ({ page }) => {
    await page.getByRole('button').filter({ hasText: /^$/ }).click();
    await page.getByRole('button', { name: 'Certificates' }).click();
    await expect(page.getByRole('heading', { name: 'Certificates' })).toBeInViewport();
  });
});