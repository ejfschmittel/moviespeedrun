import React, {useEffect, useMemo} from "react";
import { useSelector, useDispatch } from "react-redux";
import peopleActions from "../redux/people/people.actions"
import PersonCredits from "./PersonCredits.component";
import PersonDetail from "./PersonDetail.component";
/*

    people,
    movies
    tv
    game

*/

const ContentPersonPage = ({id}) => {
    const dispatch = useDispatch();
    const people = useSelector(store => store.people.peopleById)
    const person = useMemo(() => {
        return id in people ? people[id] : null;
    },[id, people])

    // load person
    useEffect(() => {
        if(id && !person){
            // try loading person
            dispatch(peopleActions.fetchPerson(id))
        }
    },[id])

    return (
        <div>
            <PersonDetail person={person} />
            <PersonCredits person={person} />
        </div>
    )
}

export default ContentPersonPage;