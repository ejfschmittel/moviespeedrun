import { combineReducers } from "redux"

import peopleReducer from "./people/people.reducer"
import moviesReducer from "./movies/movies.reducer"

export default combineReducers({
    people: peopleReducer,
    movies: moviesReducer
})