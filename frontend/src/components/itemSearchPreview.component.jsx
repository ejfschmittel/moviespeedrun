import React from "react";

import {FaFilm, FaTv, FaUser} from "react-icons/fa"
import "../styles/components/searchItemPreview.styles.scss"

import {createPreviewImageUrl} from "../utils/tmdb.utils"

const SearchItemPreview = ({item}) => {

    const getIcon = (media_type) => {
        switch(media_type){
            case 'tv':
                return <FaTv />
            case 'movie':
                return <FaFilm />
            case 'person':
                return <FaUser />
            default:
                return null;
        }


    }

    const getItemPreviewImage = (item) => {
        const getImagePath = (item) => {
            switch(item.media_type){
                case 'tv':
                    return item.backdrop_path
                case 'movie':
                    return item.backdrop_path
                case 'person':
                    return item.profile_path
                default:
                    return null;
            }
        }
        const path = getImagePath(item)
        const imageURL = createPreviewImageUrl(item.media_type, path);
        return imageURL
    }


    return (
        <div className="search-item-preview">
            <div className="search-item-preview__item-icon">
                {getIcon(item.media_type)}
            </div>
            <div className="search-item-preview__item-img">
                <img src={getItemPreviewImage(item)}/>
            </div>
            <div className="search-item-preview__item-name">
                {item?.name || item?.title}
            </div>
        </div>
    )
}

export default SearchItemPreview;