import test, { expect } from "@playwright/test";
import { formApi } from "../../utils/api";

test.describe('Api tests', () => {
    test('Verify rendering forms', async() => {
        // When
        const response = await formApi.getFormList()
        
        // Then
        await expect(response.status()).toBe(200)
    })
})