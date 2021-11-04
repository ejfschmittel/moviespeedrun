import React from "react";

import {FaFilm, FaTv, FaUser} from "react-icons/fa"
import "../styles/components/searchDropDown.styles.scss"

import {createPreviewImageUrl} from "../utils/tmdb.utils"
import SearchItemPreview from "./itemSearchPreview.component";

const SearchDropDown = ({items, show, onClick}) => {

    return (
        <div className={`search-drop-down ${show ? 'search-drop-down--show': ''}`}>
            {items && items.map(item => {
                return (
                    <div className="search-drop-down__item" onClick={()=>onClick(item)}>
                        <SearchItemPreview item={item}/>
                    </div>
                )
            })}
        </div>
    )
}


export default SearchDropDown