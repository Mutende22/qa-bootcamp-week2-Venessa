
import { test, expect } from '@playwright/test';
//homepage title should be "Practice Software Testing - Toolshop - v5.0"
test('should display the correct homepage title', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');
});

//searching pliers in the search bar should return only products containing pliers in their names
test('should return only products containing pliers in their names', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('textbox', { name: 'Search' }).fill('pliers');
  await page.getByRole('button', { name: 'Search' }).click();

  const productNames = page.locator('.card-title');

  await expect(productNames.first()).toBeVisible();

  await expect(async () => {
    const names = await productNames.allTextContents();

    expect(names.length).toBeGreaterThan(0);

    for (const name of names) {
      expect(name.toLowerCase()).toContain('pliers');
    }
  }).toPass();
});

//invalid login credentials should display an error message
test('should reject invalid login credentials', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');

  await page.getByRole('link', { name: 'Sign in' }).click();

  await page.getByRole('textbox', { name: 'Email address *' })
    .fill('invalid@example.com');

  await page.getByLabel('Password *')
    .fill('WrongPassword123');

  await page.getByRole('button', { name: 'Login' }).click();

  await expect(
    page.getByText('Invalid email or password')
  ).toBeVisible();
});
