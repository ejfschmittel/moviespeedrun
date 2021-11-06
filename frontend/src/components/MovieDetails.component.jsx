import React from "react";
import "../styles/components/movieDetails.styles.scss"
import LoadingOverlay from "./LoadingOverlay.component";
import { getImageURL } from "../utils/tmdb.utils";
import { IMAGE_SIZES } from "../utils/tmdbConfig.utils";

/*
    - name 
    - profile_path,
    - gender
    - birthday
    - deathday

    getImageUrl("background_cover", size, imagepath)
*/
const MovieDetail = ({movie, isLoading}) => {

    console.log("movie Detail")
    let imageUrl = null;
    if(movie){
        imageUrl = getImageURL(IMAGE_SIZES.POSTER.ORIGINAL, movie.poster_path) 
    }

    return (
        <div className="page-container movie-detail">
            <LoadingOverlay isLoading={false} />
            <div className="movie-detail__img-area">
                <img src={imageUrl} className="movie-detail__img"/>
            </div>
            <div className="movie-detail__info-area">
                <h2 className="movie-detail__name">{movie?.title || "Name"}</h2>
                <p>{movie?.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetail;