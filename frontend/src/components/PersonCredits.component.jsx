import React, {useEffect, useState} from "react";
import LoadingOverlay from "./LoadingOverlay.component";
import {useSelector, useDispatch} from "react-redux"
import peopleActions from "../redux/people/people.actions";
import {Link} from "react-router-dom"

import "../styles/components/personCredits.styles.scss"

const sortByDate = (creditsArr) => {
    return creditsArr.map((credit) => {
        const date = credit.first_air_date || credit.release_date || "0";
        return {
            ...credit,
            date: date,
            intDate: parseInt(date.replace("-"))
        }           
    }).sort((a,b) =>  b.intDate - a.intDate)
}


const prepCrewCredits = (crewCredits) => {
    const crewCreditsByDepartment = {}
    crewCredits.forEach((credit) => {
        // create deparment credit array if none exists
        console.log(credit.department)
        if(!(credit.department in crewCreditsByDepartment)){
            console.log("create department")
            crewCreditsByDepartment[credit.department] = []
        }
        console.log(crewCreditsByDepartment[credit.department])
        crewCreditsByDepartment[credit.department] = [...crewCreditsByDepartment[credit.department], credit]
    })

    Object.entries(crewCreditsByDepartment).forEach(([key, value]) => {
        crewCredits[key] = sortByDate(value)
    })

    return crewCreditsByDepartment;
}

const getDateYear = (date) => {
    if(date === "0" || !date) return "-"
    const year = date.split("-")[0]
    return year !== 0 ? year : "-";
}

const PersonCredits = ({person}) => {
    const dispatch = useDispatch();
    const credits = useSelector(state => {
        if(person){
            const c = state.people.credits;
            return person.id in c ? c[person.id] : null;
        }
        return null;
    })

    const [personCredits, setPersonCredits] = useState({})


    useEffect(() => {
        if(person && person.id){
            dispatch(peopleActions.fetchPersonCredits(person.id))
        }
    },[person])

    useEffect(() => {
        // sort 
        if(credits && credits.id){
            const castCredits = sortByDate(credits.cast)
            const crewCredits = prepCrewCredits(credits.crew)
            setPersonCredits({
                cast: castCredits,
                ...crewCredits
            })
        }
    },[credits])


    return (
        <div className="page-container person-credits">
            <LoadingOverlay isLoading={false}/>
            {Object.entries(personCredits).map(([sectionName, sectionCredits]) => (
                <div className="person-credits__section" key={`${sectionName}-credits`}>
                    <h3 className="person-credits__section-title">{sectionName}</h3>
                    <div className="person-credits__section-credits">
                        {sectionCredits.map(credit => {
                            return (
                            <div className="person-credits__credit">
                                <div className="person-credits__credit-year">{getDateYear(credit.date)}</div>
                                <div className="person-credits__credit-info">
                                    <Link to={`/game/${credit.media_type}/${credit.id}`} className="person-credits__credit-title"> 
                                        {credit.name || credit.title}
                                    </Link>

                                    {credit.episode_count && (
                                        <div className="person-credits__credit-episodes">
                                            (Episodes: {credit?.episode_count})
                                        </div>
                                    )}

                                    {credit.character && (
                                        <div className="person-credits__credit-character">
                                            as {credit?.character}
                                        </div>
                                    )}

                                    {credit.job && (
                                        <div className="person-credits__credit-job">
                                            {credit?.job}
                                        </div>
                                    )}
                                   
                                    
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default PersonCredits