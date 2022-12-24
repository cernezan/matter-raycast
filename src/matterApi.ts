import fetch, { Headers } from "node-fetch";
import { getPreferenceValues } from "@raycast/api";
import { Preferences } from "./types";


const url = 'https://web.getmatter.com/api/library_items/queue_feed?page=1'
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcyMzQxOTA1LCJqdGkiOiIzYzM4Y2U3MTYzMWI0NDY4YTE0OGI5Y2MyYjYwODRhYyIsInVzZXJfaWQiOjgzNTQzLCJjbGllbnRfdHlwZSI6ImFwcCIsImxvZ2luX3Nlc3Npb25faWQiOiJjNDg0YzUyYS1jOTQ0LTRlNmUtOGFlZi0wZWQwZjkzNTIxOWYifQ.McDI_M36MqiBpntucWbjB5t6zoHdi7oDhk2CdwMPBTE'



async function getQueue() {
    const token = getPreferenceValues<Preferences>().matterToken
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        }
    }

    try {
        const response = await fetch(url, options)
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}

export { getQueue }
