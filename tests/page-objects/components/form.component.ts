import { expect, type Locator, type Page } from "@playwright/test";
import { FormOption } from "../../utils/enums/form-option";
import { GlobalNode } from "../../utils/enums/global-node"

export class FormComponent {

    private readonly _page: Page
    get formSection(): Locator {
        return this._page.locator('section').getByRole('dialog')
    }

    get title(): Locator {
        return this._page.locator('header p.text-sm')
    }

    get globalNodeButton(): (text: string) => Locator {
        return text => this._page.locator('h2', { hasText: text })
    }

    get footerButton(): (name: string) => Locator {
        return name => this._page.locator('footer button', { hasText: name })
    }

    constructor(page: Page) {
        this._page = page
    }

    async shouldHaveTitle(options: { text: string }) {
        await expect(this.title).toContainText(options.text)
    }

    async shouldOptionsBeVisible(options: { formOption: FormOption | string }) {
        await expect(this._page.getByText(options.formOption)).toBeVisible()
    }

    async selectOption(options: { formOption: FormOption }) {
        await this._page.getByText(options.formOption).click()
    }

    async shoulGlobalNodeBe(options: { visible: boolean, node: GlobalNode }) {
        options.visible ?
            await expect(this.globalNodeButton(options.node)).toBeVisible() :
            await expect(this.globalNodeButton(options.node)).toBeHidden()
    }

    async clickOnGlobalNode(options: { globalNode: GlobalNode }) {
        await this._page.getByText(options.globalNode).click()
    }

    async clickOnSelect() {
        await this.footerButton('Select').click()
    }

    async clickOnClose() {
        await this.footerButton('Close').click()
    }
}