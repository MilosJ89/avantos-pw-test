import { test } from '../utils/test-utils';
import { randomText } from '../helpers/helper-functions';
import { FormOption } from '../utils/enums/form-option';

test.describe('Landing', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173')
  })

  test('Verify all forms', async ({ mainPage }) => {
    // Then
    await mainPage.shouldFormBe({ visible: true, form: 'Form A' })
    await mainPage.shouldFormBe({ visible: true, form: 'Form B' })
    await mainPage.shouldFormBe({ visible: true, form: 'Form C' })
    await mainPage.shouldFormBe({ visible: true, form: 'Form D' })
    await mainPage.shouldFormBe({ visible: true, form: 'Form E' })
    await mainPage.shouldFormBe({ visible: true, form: 'Form F' })
    await mainPage.shouldFormBe({ visible: false, form: randomText() })
  })

  test('Open form A', async ({ mainPage }) => {
    // When
    await mainPage.clickOnForm({ form: 'Form A' })

    // Then
    await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form A'})
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.BUTTON })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_CHECKBOX_GROUP })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_OBJECT })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ID })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.MULTI_SELECT })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NAME })
    await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NOTES })
  })
})