import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
 const chinese = await page.getByRole('link', { name: '中文 1 347 000+ 條目'}).click();
  expect(chinese).toBeDefined();
});