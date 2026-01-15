import { expect, test } from "../../api"

test.describe('Api tests', () => {
    test('Verify rendering forms', async ({ formApi }) => {
        // When
        const response = await formApi.getFormList()

        // Then
        await expect(response.status()).toBe(200)
    })
})