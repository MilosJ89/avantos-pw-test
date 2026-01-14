import { expect } from '@playwright/test';
import { test } from '../utils/test-utils';
import { randomText } from '../helpers/helper-functions';
import { FormOption } from '../utils/enums/form-option';
import { formApi } from '../utils/api';
// import { MainPage } from './page-objects/main.po';

test.describe('Avantos form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
    // await page.getByText('Form A').click()
    // await page.getByText('Form Layouts').click()
  })

  // test('Verify all forms', async ({ mainPage }) => {
  //   await mainPage.shouldFormBe({ visible: true, form: 'Form A' })
  //   await mainPage.shouldFormBe({ visible: true, form: 'Form B' })
  //   await mainPage.shouldFormBe({ visible: true, form: 'Form C' })
  //   await mainPage.shouldFormBe({ visible: true, form: 'Form D' })
  //   await mainPage.shouldFormBe({ visible: true, form: 'Form E' })
  //   await mainPage.shouldFormBe({ visible: true, form: 'Form F' })
  //   await mainPage.shouldFormBe({ visible: false, form: randomText() })
  // })

  // test('Open form A', async ({ mainPage }) => {
  //   await mainPage.clickOnForm({ form: 'Form A' })

  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.BUTTON })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_CHECKBOX_GROUP })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_OBJECT })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.ID })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.MULTI_SELECT })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.NAME })
  //   await mainPage.shouldOptionsBeVisible({ formOption: FormOption.NOTES })

  //   // await mainPage.shouldOptionsBeVisible({ formOption: FormOption.TEST })
  // })

  test('Get forms', async({ page, mainPage}) => {
    console.log('ovde sam')
    const response = await formApi.getFormList()
    const responseBody = await response.json()
    console.log(responseBody)
    // await formApi.getToken()
    await page.pause()
    await mainPage.clickOnForm({ form: 'Form A' })
  })
})



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
