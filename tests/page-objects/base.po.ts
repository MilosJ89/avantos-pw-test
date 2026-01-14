import { Locator, Page } from "@playwright/test";
import { FormComponent } from "./components/form.component";

export default class BasePage {
    readonly page: Page
    readonly formComponent: FormComponent

    constructor(page: Page) {
        this.page = page
    }
    
    get buttonWithText(): (text: string) => Locator {
        return text => this.page.getByText(text)
    }
}