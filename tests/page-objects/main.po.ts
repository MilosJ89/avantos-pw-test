import { expect, Page } from "@playwright/test";
import BasePage from "./base.po";
import { FormOption } from "../utils/enums/form-option";

export class MainPage extends BasePage {

    // Locators
    // get formButton(): (text: string) => Locator {
    //     return 
    // }

    constructor(page: Page) {
        super(page)
    }

    async clickOnForm(options: { form: string }) {
        await this.buttonWithText(options.form).click()
    }

    async shouldFormBe(options: { visible: boolean, form: string }) {
        options.visible ?
            await expect(this.buttonWithText(options.form)).toBeVisible() :
            await expect(this.buttonWithText(options.form)).not.toBeVisible()
    }

    async shouldOptionsBeVisible(options: { formOption: FormOption }) {
        await expect(this.page.getByText(options.formOption)).toBeVisible()
     }
}