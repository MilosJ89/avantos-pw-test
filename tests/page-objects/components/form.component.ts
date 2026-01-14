import { expect, Locator, Page } from "@playwright/test";
import { FormOption } from "../../utils/enums/form-option";

export class FormComponent {

    private readonly _page: Page
    get formSection(): Locator {
        return this._page.locator('section').getByRole('dialog')
    }

    constructor(page: Page) {
        this._page = page
    }

    // getFormOptionButton: (options: { value: FormOption }) => {
    //     return this.formSection.getByRole('button', { name: options.value })
    // }

    // async shouldOptionsBeVisible = (options: { formOption: FormOption }) => {
    //    await expect(this._page.getByText(options.formOption )).toBeVisible()
    // }
}