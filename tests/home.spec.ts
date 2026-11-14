// @ts-check
import { test, expect } from '@playwright/test';

test.describe('home tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/');
  });

  test('summary is visible', async ({ page }) => {
    await expect(page.getByText('Senior Software Engineer with 8+ years of experience')).toBeVisible();
  });

  test('certification chips are visible', async ({ page }) => {
    await expect(page.getByText('Claude Certified Associate - Foundations')).toBeVisible();
    await expect(page.getByText('Technology Architect Associate', { exact: true })).toBeVisible();
  });

  test('Claude chip opens the certificate verification page', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup');
    await page.getByText('Claude Certified Associate - Foundations').click();
    const popup = await popupPromise;
    expect(popup.url().split('#')[0]).toContain('verify.skilljar.com/c/ekk3rpvfv4pw');
  });

  test('Technology Architect chip opens the Credly badge', async ({ page }) => {
    const popupPromise = page.waitForEvent('popup');
    await page.getByText('Technology Architect Associate', { exact: true }).click();
    const popup = await popupPromise;
    expect(popup.url().split('#')[0]).toContain('credly.com/badges/95627021-1eea-47be-9720-bd400a10d291');
  });

  test('contact links have correct targets', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'Email' })).toHaveAttribute('href', 'mailto:work@kennethsumang.com');
    await expect(page.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/kenneth-sumang/');
    await expect(page.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com/kennethsumang');
  });
});
