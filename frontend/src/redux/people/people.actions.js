import PEOPLE_TYPES from "./people.types"
import peopleService from "./people.service"


const fetchPerson = (id) => (dispatch) => {
    const fetchPersonStart = (id) => ({
        type: PEOPLE_TYPES.FETCH_PERSON_START,
        payload: id,
    })

    const fetchPersonSuccess = (person) => ({
        type: PEOPLE_TYPES.FETCH_PERSON_SUCCESS,
        payload: person,
    })

    const fetchPersonError = (id, error) => ({
        type: PEOPLE_TYPES.FETCH_PERSON_ERROR,
        payload: {id, error},
    })

    console.log("test")
    console.log(PEOPLE_TYPES)
    dispatch(fetchPersonStart(id))

    peopleService.fetchPerson(id)
        .then(json => {
            console.log(json)
            dispatch(fetchPersonSuccess(json))
        }).catch(error => {
            console.log(error)
            dispatch(fetchPersonError)
        })   
}

const fetchPersonCredits = (id) => (dispatch) => {
    const fetchPersonCreditsStart = (id) => ({
        type: PEOPLE_TYPES.FETCH_PERSON_CREDITS_START,
        payload: id,
    })

    const fetchPersonCreditsSuccess = (credits) => ({
        type: PEOPLE_TYPES.FETCH_PERSON_CREDITS_SUCCESS,
        payload: credits,
    })

    const fetchPersonCreditsError = (id, error) => ({
        type: PEOPLE_TYPES.FETCH_PERSON_CREDITS_ERROR,
        payload: {id, error},
    })

    dispatch(fetchPersonCreditsStart(id))

    peopleService.fetchPersonCredits(id)
        .then(json => {
            console.log(json)
            dispatch(fetchPersonCreditsSuccess(json))
        }).catch(error => {
            console.log(error)
            dispatch(fetchPersonCreditsError(error))
        })   
}


export default {
    fetchPerson,
    fetchPersonCredits
}