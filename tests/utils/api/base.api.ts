import { APIResponse, request } from "@playwright/test"

const baseApiUrl = 'http://localhost:3000/api/v1/'

export class BaseApi {

    protected async sendRequest(options: { method: string, url: string }) {
        console.log(`${baseApiUrl}${options.url}`)
        
        const apiContext = await request.newContext()
        let returnContext!: any
        const headers = {
            'Accept': 'application/json, application/problem+json',
        }

        switch (options.method) {
            case 'GET':
                returnContext = await apiContext.get(`${baseApiUrl}${options.url}`, {
                    headers
                })
            // case 'POST':
            //     returnContext = await apiContext.post(`${baseApiUrl}${options.url}`, {
            //         headers: 
            //     })
        }

        return returnContext

        
    }
}