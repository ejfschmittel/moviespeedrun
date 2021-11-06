import {HTTPError} from "./errors.utils"

export const handleFetchResponse = (response) => {
    if(response.ok){
        return response.json();
    }else{ 
        return response.json().then((json) => {
            throw new HTTPError(`(Status: ${response.status}) ${response.statusText}`, response.status, json.message)
        })
    }
}

export const tmdbFetch = (url, options={}) => {

    const defaultTmdbOptions = {
        method: "GET",
    }

    return fetch(url, {
        ...defaultTmdbOptions,
        ...options,
    }).then(handleFetchResponse)
}