'use server'

import {apiKey, baseUrl} from "@/src/app/constants/constants";

export const rawgFetch = async (endpoint:string) => {

    const url = new URL(`${baseUrl}${endpoint}`)

    if(!apiKey) {
        throw new Error('No API key found.')
    }
    url.searchParams.set("key", apiKey);

    const response = await fetch(url);



    if (!response.ok) {
        throw new Error(response.statusText);
    }
     return response;
}