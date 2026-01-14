import { APIResponse } from "@playwright/test";
import { BaseApi } from "./base.api";

export class FormApi extends BaseApi {

    async getFormList(): Promise<APIResponse> {
        return await this.sendRequest({
            method: 'GET',
            url: 'MOCK/actions/blueprints/MOCK/graph'
        }).then($response => {
            return $response
        })
    }
}