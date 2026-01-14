import test, { expect } from "@playwright/test";
import { formApi } from "../../utils/api";

test.describe('Api tests', () => {
    test('Verify rendering forms', async() => {
        const response = await formApi.getFormList()
        await expect(response.status()).toBe(200)
    })
})