import { FormOption } from "../utils/enums/form-option";
import { GlobalNode } from "../utils/enums/global-node";
import { test } from "../utils/test-utils";

test.describe('Prefilled data', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/')
    })

    test('Preflled data from form A', async ({ mainPage }) => {
        // When
        await mainPage.clickOnForm({ form: GlobalNode.FORM_A })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form A' })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.BUTTON })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Select mapping for button in Form A' })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })

        // When
        await mainPage.formComponent.clickOnGlobalNode({ globalNode: GlobalNode.GLOBAL_NODE_1 })

        // Then
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NAME })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.NAME })
        await mainPage.formComponent.clickOnSelect()

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form A' })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: 'button: Global Node 1.name'})

        // When
        await mainPage.formComponent.clickOnClose()
        await mainPage.shouldFormBe({ visible: true, form: GlobalNode.FORM_B})
        await mainPage.clickOnForm({ form: GlobalNode.FORM_B })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form B' })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.EMAIL})

        // Then
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_A })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_B })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_C })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_D })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_E })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_F })
    })
})