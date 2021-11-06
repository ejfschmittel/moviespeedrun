import {API_KEY, BASE_API_URL, config} from "./tmdbConfig.utils"

const createAPIUrl = (endpoint, parameters) => {
    let endpointUrl = `${BASE_API_URL}${endpoint}?api_key=${API_KEY}`;
    Object.entries(parameters).map(([key, value]) => {
        endpointUrl += `&${key}=${encodeURI(value)}`;
    })
    return endpointUrl;
}


export const URL_CREATORS = {
    getPerson: (personID, parameters={}) => createAPIUrl(`person/${personID}`, parameters),
    getPersonCredits: (personID, parameters={}) => createAPIUrl(`person/${personID}/combined_credits`, parameters),
    getMovie: (movieID, parameters={}) => createAPIUrl(`movie/${movieID}`, parameters),
    getMovieCredits: (movieID, parameters={}) => createAPIUrl(`movie/${movieID}/credits`, parameters),
    getTv: (tvId, parameters={}) => createAPIUrl(`tv/${tvId}`, parameters),
    getTvCredits: (tvId, parameters={}) => createAPIUrl(`tv/${tvId}/aggregate_credits`, parameters),
    searchAll: (parameters={}) => createAPIUrl(`search/multi`, parameters) 
}






export const createPreviewImageUrl = (media_type, path) => {
    return createImageUrl("preview_size", media_type, path)
}

export const createImageUrl = (image_type, media_type, path) => {
    return `${config.images.secure_base_url}${config[image_type][media_type]}${path}`;
}






export const getImageURL = ( size, path) => {
   return `${config.images.secure_base_url}${size}${path}`;
}

