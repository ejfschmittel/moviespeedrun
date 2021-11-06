import MOVIE_TYPES from "./movies.types"
import movieService from "./movies.service"


const fetchMovie = (id) => (dispatch) => {
    const fetchMovieStart = (id) => ({
        type: MOVIE_TYPES.FETCH_MOVIE_START,
        payload: id,
    })

    const fetchMovieSuccess = (person) => ({
        type: MOVIE_TYPES.FETCH_MOVIE_SUCCESS,
        payload: person,
    })

    const fetchMovieError = (id, error) => ({
        type: MOVIE_TYPES.FETCH_MOVIE_ERROR,
        payload: {id, error},
    })

    dispatch(fetchMovieStart(id))

    movieService.fetchMovie(id)
        .then(json => {
            console.log(json)
            dispatch(fetchMovieSuccess(json))
        }).catch(error => {
            console.log(error)
            dispatch(fetchMovieError)
        })   
}

const fetchMovieCredits = (id) => (dispatch) => {
    const fetchMovieCreditsStart = (id) => ({
        type: MOVIE_TYPES.FETCH_MOVIE_CREDITS_START,
        payload: id,
    })

    const fetchMovieCreditsSuccess = (credits) => ({
        type: MOVIE_TYPES.FETCH_MOVIE_CREDITS_SUCCESS,
        payload: credits,
    })

    const fetchMovieCreditsError = (id, error) => ({
        type: MOVIE_TYPES.FETCH_MOVIE_CREDITS_ERROR,
        payload: {id, error},
    })

    dispatch(fetchMovieCreditsStart(id))

    movieService.fetchMovieCredits(id)
        .then(json => {
            console.log(json)
            dispatch(fetchMovieCreditsSuccess(json))
        }).catch(error => {
            console.log(error)
            dispatch(fetchMovieCreditsError(error))
        })   
}

export default {
    fetchMovie,
    fetchMovieCredits
}