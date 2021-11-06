import React from "react";
import "../styles/components/personDetail.styles.scss"
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
const PersonDetail = ({person, isLoading}) => {

    let imageUrl = null;
    if(person){
        imageUrl = getImageURL(IMAGE_SIZES.PROFILE.ORIGINAL, person.profile_path) 
    }

    return (
        <div className="page-container person-detail">
            <LoadingOverlay isLoading={false} />
            <div className="person-detail__img-area">
                <img src={imageUrl} className="person-detail__img"/>
            </div>
            <div className="person-detail__info-area">
                <h2 className="person-detail__name">{person?.name || "Name"}</h2>
            </div>
        </div>
    )
}

export default PersonDetail;