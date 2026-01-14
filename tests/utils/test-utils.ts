import test from "@playwright/test"
import { MainPage } from "../page-objects/main.po"

type Fixture = {
    mainPage: MainPage
}

const customTextExtended = test.extend<Fixture>({
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page))
    }
})

export * from '@playwright/test'
export { customTextExtended as test }