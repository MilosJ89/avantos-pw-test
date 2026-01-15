import test from "@playwright/test";
import { FormApi } from "./form.api";

type Fixture = {
    formApi: FormApi
}

const customTextExtended = test.extend<Fixture>({
    formApi: async ({ }, use) => {
        await use(new FormApi())
    }
})

export * from '@playwright/test'
export { customTextExtended as test }