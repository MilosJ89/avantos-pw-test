import { expect, type Locator, type Page } from "@playwright/test";
import { FormOption } from "../../utils/enums/form-option";

export class FormComponent {

    private readonly _page: Page
    get formSection(): Locator {
        return this._page.locator('section').getByRole('dialog')
    }

    get title(): Locator {
        return this._page.locator('header p.text-sm')
    }

    constructor(page: Page) {
        this._page = page
    }

    // getFormOptionButton: (options: { value: FormOption }) => {
    //     return this.formSection.getByRole('button', { name: options.value })
    // }
    async shouldHaveTitle (options: { text: string}) {
        await expect(this.title).toContainText(options.text)
    }


    async shouldOptionsBeVisible (options: { formOption: FormOption }) {
       await expect(this._page.getByText(options.formOption )).toBeVisible()
    }
}