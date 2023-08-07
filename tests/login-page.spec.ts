import { expect, test } from '@playwright/test'
 
test('should navigate to the log in page', async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto('/inicio')
  // Find an element with the text 'About Page' and click on it
  await page.click('text=Entrar')
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL('/inicio')
  // The new page should contain an h1 with "About Page"
  await expect(page.locator('h3')).toContainText('Iniciar sesión')
  await expect(page.locator('#submit-access-btn')).toContainText('Entrar')
})