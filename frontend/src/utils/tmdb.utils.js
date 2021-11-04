

export const API_KEY = process.env.REACT_APP_TMDB_KEY;

export const configurations = {
    base_url: null,
    preview_size: null
}


export const createPreviewImageUrl = (media_type, path) => {
    return createImageUrl("preview_size", media_type, path)
}

export const createImageUrl = (image_type, media_type, path) => {
    return `${configurations.base_url}${configurations[image_type][media_type]}${path}`;
}


export const createConfig = async (searchTerm) => {
    searchTerm = encodeURI(searchTerm)
    const url = `https://api.themoviedb.org/3/configuration?api_key=${API_KEY}`;

    console.log(url)

    try{
        const res = await fetch(url)
        const json = await res.json()
        
        configurations.base_url = json.images.base_url;
        configurations.preview_size = {
            movie: json.images.backdrop_sizes[0],
            tv: json.images.backdrop_sizes[0],
            person: json.images.profile_sizes[1],
        }
        console.log(configurations)

    }catch(error){
        console.log(error)
    }
}

