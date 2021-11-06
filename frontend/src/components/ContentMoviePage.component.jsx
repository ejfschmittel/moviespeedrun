import React, {useEffect, useMemo} from "react";
import { useSelector, useDispatch } from "react-redux";
import movieActions from "../redux/movies/movies.actions"

import MovieDetails from "./MovieDetails.component";
import MovieCredits from "./MovieCredits.component"
/*

    people,
    movies
    tv
    game

*/

const ContentMoviePage = ({id}) => {
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies.moviesById)
    const movie = useMemo(() => {
        return id in movies ? movies[id] : null;
    },[id, movies])

    // load person
    useEffect(() => {
        if(id && !movie){
            // try loading person
            dispatch(movieActions.fetchMovie(id))
        }
    },[id])

    return (
        <div>
            <MovieDetails movie={movie} />
            <MovieCredits movie={movie} />
        </div>
    )
}

export default ContentMoviePage;