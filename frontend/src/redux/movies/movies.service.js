import {URL_CREATORS} from "../../utils/tmdb.utils"
import { tmdbFetch } from "../../utils/fetch.utils";




const fetchMovie = async (id) => {
    const url = URL_CREATORS.getMovie(id);
    return tmdbFetch(url, {})
}

const fetchMovieCredits = async (id) => {
    const url = URL_CREATORS.getMovieCredits(id);
    return tmdbFetch(url, {})
}

export default {
    fetchMovie,
    fetchMovieCredits
}