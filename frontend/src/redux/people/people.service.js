import {URL_CREATORS} from "../../utils/tmdb.utils"
import { tmdbFetch } from "../../utils/fetch.utils";




const fetchPerson = async (id) => {
    const url = URL_CREATORS.getPerson(id);
    return tmdbFetch(url, {})
}

const fetchPersonCredits = async (id) => {
    const url = URL_CREATORS.getPersonCredits(id);
    return tmdbFetch(url, {})
}

export default {
    fetchPerson,
    fetchPersonCredits
}