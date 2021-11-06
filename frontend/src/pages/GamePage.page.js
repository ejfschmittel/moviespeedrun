import React from "react"
import {useParams, useLocation} from "react-router-dom"
import "../styles/pages/GamePage.styles.scss"
import ContentPersonPage from "../components/ContentPersonPage.component"
import ContentMoviePage from "../components/ContentMoviePage.component";
/*

/type(tv,movie,person)/id
*/

const GamePage = () => {

    const {type, id} = useParams();
    const {pathname} = useLocation();


    // use params to load content

    const renderPage = () => {
        switch(type){
            case 'person':
                return <ContentPersonPage id={id} />
            case 'movie':
                return <ContentMoviePage id={id} />
            default:
                return null;
        }
    }

    return (
        <div className="game-page">
            <div className="game-header">
                <div className="game-header__navigation">
                    back 
                </div>
                <div className="game-header__info">
                    from to
                </div>

                <div className="game-header__menu">
                    quit
                </div>
            </div>

            <div className="game-page__body">
                {renderPage()}
            </div>

            
        </div>
    )
}


export default GamePage