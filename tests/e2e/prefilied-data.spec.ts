import test from "@playwright/test";

test.describe('Prefillied data', async () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:5173')
    })

    test('Prefillied data from form A', async () => {
        
    })
})