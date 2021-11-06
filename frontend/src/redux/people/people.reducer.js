import PEOPLE_TYPES from "./people.types"

const initialState = {
    peopleById: {},
    credits: {}
}

const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case PEOPLE_TYPES.FETCH_PERSON_START:
                return {...state, peopleById: {
                    ...state.peopleById,
                    [action.payload]: {...state.peopleById[action.payload], isLoading: true}
                }}
        case PEOPLE_TYPES.FETCH_PERSON_SUCCESS:
            return {...state, peopleById: {
                ...state.peopleById,
                [action.payload.id]: {...state.peopleById[action.payload.id], ...action.payload, isLoading: false}
            }}
        case PEOPLE_TYPES.FETCH_PERSON_SUCCESS:
            return {...state, peopleById: {
                ...state.peopleById,
                [action.payload.id]: {...state.peopleById[action.payload.id], isLoading: false, error: action.payload.error}
            }}

        case PEOPLE_TYPES.FETCH_PERSON_CREDITS_START:
            return {...state, credits: {
                ...state.credits,
                [action.payload]: {...state.credits[action.payload], isLoading: true}
            }}

        case PEOPLE_TYPES.FETCH_PERSON_CREDITS_SUCCESS:
            return {...state, credits: {
                ...state.credits,
                [action.payload.id]: {...state.credits[action.payload.id], ...action.payload, isLoading: false}
            }}

        case PEOPLE_TYPES.FETCH_PERSON_CREDITS_ERROR:
            return {...state, credits: {
                ...state.credits,
                [action.payload.id]: {...state.credits[action.payload.id], isLoading: false}
            }}

    
        default:
            return state;
    }
}

export default peopleReducer