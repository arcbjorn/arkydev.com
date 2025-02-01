import { expect, test } from '@playwright/test';
import { ECompanyName } from '../src/components/enums';

test('homepage should have correct title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(ECompanyName.FULL);
});

test('navigation links are working', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
	await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});
