import { FormOption } from "../utils/enums/form-option";
import { GlobalNode } from "../utils/enums/global-node";
import { test } from "../page-objects/index";

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
        await mainPage.formComponent.shouldOptionsBeSelected({ text: 'button: Global Node 1.name' })

        // When
        await mainPage.formComponent.clickOnClose()
        await mainPage.shouldFormBe({ visible: true, form: GlobalNode.FORM_B })
        await mainPage.clickOnForm({ form: GlobalNode.FORM_B })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form B' })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.EMAIL })

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

    test('Preflled data for form B', async ({ mainPage }) => {
        // When
        await mainPage.clickOnForm({ form: GlobalNode.FORM_B })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form B' })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.DYNAMIC_CHECKBOX_GROUP })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Select mapping for dynamic_checkbox_group in Form B' })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_A })

        // When
        await mainPage.formComponent.clickOnGlobalNode({ globalNode: GlobalNode.FORM_A })

        // Then
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.BUTTON })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_CHECKBOX_GROUP })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_OBJECT })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ID })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.MULTI_SELECT })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NAME })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NOTES })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.ID })
        await mainPage.formComponent.clickOnSelect()

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form B' })
        await mainPage.formComponent.shouldOptionsBeSelected({ text: 'dynamic_checkbox_group: Form A.id' })

        // When
        await mainPage.formComponent.clickOnClose()

        // Then
        await mainPage.formComponent.shouldModalBe({ visible: false })
    })

    test('Preflled data for form C', async ({ mainPage }) => {
        // When
        await mainPage.clickOnForm({ form: GlobalNode.FORM_C })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form C' })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.MULTI_SELECT })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Select mapping for multi_select in Form C' })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_A })

        // When
        await mainPage.formComponent.clickOnGlobalNode({ globalNode: GlobalNode.GLOBAL_NODE_2 })

        // Then
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ROLE })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ACCESS })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.ROLE })
        await mainPage.formComponent.clickOnSelect()

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form C' })
        await mainPage.formComponent.shouldOptionsBeSelected({ text: 'multi_select: Global Node 2.role' })

        // When
        await mainPage.formComponent.clickOnClose()

        // Then
        await mainPage.formComponent.shouldModalBe({ visible: false })
    })

    test('Prefilled data for form D', async ({ mainPage }) => {
        // When
        await mainPage.clickOnForm({ form: GlobalNode.FORM_D })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form D' })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.ID })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Select mapping for id in Form D' })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_A })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_B })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_C })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_E })

        // When
        await mainPage.formComponent.clickOnGlobalNode({ globalNode: GlobalNode.FORM_B })

        // Then
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.BUTTON })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_CHECKBOX_GROUP })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_OBJECT })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ID })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.MULTI_SELECT })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NAME })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NOTES })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.MULTI_SELECT })
        await mainPage.formComponent.clickOnSelect()

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form D' })
        await mainPage.formComponent.shouldOptionsBeSelected({ text: 'id: Form B.multi_select' })
    })

    test('Prefilled data for form E', async ({ mainPage }) => {
        // When
        await mainPage.clickOnForm({ form: GlobalNode.FORM_E })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form E' })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.NAME })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Select mapping for name in Form E' })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_A })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_B })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_C })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_D })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: false, node: GlobalNode.FORM_F })

        // When
        await mainPage.formComponent.clickOnGlobalNode({ globalNode: GlobalNode.GLOBAL_NODE_2 })

        // Then
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ROLE })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ACCESS })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.ACCESS })
        await mainPage.formComponent.clickOnSelect()

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form E' })
        await mainPage.formComponent.shouldOptionsBeSelected({ text: 'name: Global Node 2.access' })
    })

    test('Prefilled data for form F', async ({ mainPage }) => {
        // When
        await mainPage.clickOnForm({ form: GlobalNode.FORM_F })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form F' })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.DYNAMIC_OBJECT })

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Select mapping for dynamic_object in Form F' })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_1 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.GLOBAL_NODE_2 })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_A })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_B })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_C })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_D })
        await mainPage.formComponent.shoulGlobalNodeBe({ visible: true, node: GlobalNode.FORM_E })

        // When
        await mainPage.formComponent.clickOnGlobalNode({ globalNode: GlobalNode.FORM_E })

        // Then
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.BUTTON })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_CHECKBOX_GROUP })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.DYNAMIC_OBJECT })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.EMAIL })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.ID })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.MULTI_SELECT })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NAME })
        await mainPage.formComponent.shouldOptionsBeVisible({ formOption: FormOption.NOTES })

        // When
        await mainPage.formComponent.selectOption({ formOption: FormOption.NOTES })
        await mainPage.formComponent.clickOnSelect()

        // Then
        await mainPage.formComponent.shouldHaveTitle({ text: 'Prefill fields for Form F' })
        await mainPage.formComponent.shouldOptionsBeSelected({ text: 'dynamic_object: Form E.notes' })
    })
})