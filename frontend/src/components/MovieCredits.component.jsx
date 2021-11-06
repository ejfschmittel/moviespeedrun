import React, {useEffect, useState} from "react";
import LoadingOverlay from "./LoadingOverlay.component";
import {useSelector, useDispatch} from "react-redux"
import movieActions from "../redux/movies/movies.actions"
import {Link} from "react-router-dom"
import {getImageURL} from "../utils/tmdb.utils"
import { IMAGE_SIZES } from "../utils/tmdbConfig.utils";

import "../styles/components/movieCredits.styles.scss"



const seperateCastByDepartment = (castCredits) => {
    const seperatedCastCredits = {}
    castCredits.forEach(value => {
        if(!(value.department in seperatedCastCredits)){
            console.log("create department")
            seperatedCastCredits[value.department] = []
        }

        seperatedCastCredits[value.department] = [...seperatedCastCredits[value.department], value]
    })
    return seperatedCastCredits
}

const MovieCredits = ({movie}) => {
    const dispatch = useDispatch();
    const credits = useSelector(state => {
        if(movie){
            const c = state.movies.credits;
            return movie.id in c ? c[movie.id] : null;
        }
        return null;
    })

    const [movieCredits, setMovieCredits] = useState({})


    useEffect(() => {
        if(movie && movie.id){
            dispatch(movieActions.fetchMovieCredits(movie.id))
        }
    },[movie])

    useEffect(() => {
        // sort 
        if(credits && credits.id){
            const crewCredits = seperateCastByDepartment(credits.crew)
            console.log(crewCredits)
           setMovieCredits({
               Cast: credits.cast,
                ...crewCredits
           })
        }
    },[credits])


    return (
        <div className="page-container movie-credits">
            <LoadingOverlay isLoading={false}/>
            {Object.entries(movieCredits).map(([sectionName, sectionCredits]) => (
                <div className="movie-credits__section" key={`${sectionName}-credits`}>
                    <h3 className="movie-credits__section-title">{sectionName}</h3>
                    <div className="movie-credits__section-credits">
                        {sectionCredits.map(credit => {
                            let imageUrl = null;
                            if(credit){
                                imageUrl = getImageURL(IMAGE_SIZES.PROFILE.W185, credit.profile_path) 
                            }
                            return (
                            <Link to={`/game/person/${credit.id}`} className="movie-credits__credit">
                                <div className="movie-credits__image" style={{backgroundImage: `url('${imageUrl}')`}}>

                                </div>
                                <div className="movie-credits__name">{credit.name}</div>
                            </Link>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieCredits