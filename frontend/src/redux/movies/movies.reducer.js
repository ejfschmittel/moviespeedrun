import MOVIE_TYPES from "./movies.types"

const initialState = {
    moviesById: {},
    credits: {}
}

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case MOVIE_TYPES.FETCH_MOVIE_START:
                return {...state, moviesById: {
                    ...state.moviesById,
                    [action.payload]: {...state.moviesById[action.payload], isLoading: true}
                }}
        case MOVIE_TYPES.FETCH_MOVIE_SUCCESS:
            return {...state, moviesById: {
                ...state.moviesById,
                [action.payload.id]: {...state.moviesById[action.payload.id], ...action.payload, isLoading: false}
            }}
        case MOVIE_TYPES.FETCH_MOVIE_ERROR:
            return {...state, moviesById: {
                ...state.moviesById,
                [action.payload.id]: {...state.moviesById[action.payload.id], isLoading: false, error: action.payload.error}
            }}


        case MOVIE_TYPES.FETCH_MOVIE_CREDITS_START:
            return {...state, credits: {
                ...state.credits,
                [action.payload]: {...state.credits[action.payload], isLoading: true}
            }}

        case MOVIE_TYPES.FETCH_MOVIE_CREDITS_SUCCESS:
            return {...state, credits: {
                ...state.credits,
                [action.payload.id]: {...state.credits[action.payload.id], ...action.payload, isLoading: false}
            }}

        case MOVIE_TYPES.FETCH_MOVIE_CREDITS_ERROR:
            return {...state, credits: {
                ...state.credits,
                [action.payload.id]: {...state.credits[action.payload.id], isLoading: false}
            }}

    
        default:
            return state;
    }
}

export default moviesReducer