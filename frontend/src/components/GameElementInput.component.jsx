import React, {useCallback, useState, useEffect, useRef} from "react";
import SearchDropDown from "./SearchDropDown.component";
import "../styles/components/gameElementInput.styles.scss"
import {API_KEY} from "../utils/tmdbConfig.utils"
import useDebounce from "../hooks/useDebounce.hook";
import SearchItemPreview from "./itemSearchPreview.component";
import {FaTimes} from "react-icons/fa"

const isString = (val) => typeof val === 'string' || val instanceof String



export const useGameElementInput = (initialVal="") => {
    const [value, setValue] = useState(initialVal)
    const [items, setItems] = useState([])
    const debouncedValue = useDebounce(value, 500)

    

    const onChange = (e) => {
        setValue(e.target.value)
       
    }
    
    const search = async (searchTerm) => {
        console.log("search")
        if(search === ""){
            setItems([]);
            return;
        }

        searchTerm = encodeURI(searchTerm)
        const url = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTerm}&language=en-US&page=1`;

        console.log(url)

        try{
            const res = await fetch(url)
            const json = await res.json()
            console.log(json)
            setItems(json.results)
        }catch(error){
            console.log(error)
        }
    }

    const onClick = (item) => {
        console.log(item)
        setValue(item)

    }

    const removeItem = () => {
        setValue("")
    }

    useEffect(() => {
        if(debouncedValue === ""){
            setItems([])
        }else{
            search(debouncedValue)
        }
    },[debouncedValue])



    return {value, setValue, items, onChange, onClick, removeItem}
}



const GameElementInput = ({value, onChange, label, id, items, onClick, removeItem}) => {

    const containerRef = useRef()
    const [show, setShow] = useState(false)
    

    const onFocus = () =>setShow(true)
    //const onBlur = () => setShow(false)

    useEffect(() => window.addEventListener('click', ev => {
        if(containerRef.current && containerRef.current.contains(ev.target)) {setShow(true)}
        else {setShow(false)}
    }));



    return (
        <div className="game-element-input" ref={containerRef}>
            <label for={id}>{label}</label>
            <div className="game-element-input__input">
                {
                    isString(value) ?
                    (<input type="text" name="search" onChange={onChange} value={value} id={id} autoComplete="off"  onFocus={onFocus}/>) :
                    <div className="game-element-input__selected">
                        <SearchItemPreview item={value}/>
                        <div className="game-element-input__remove" onClick={removeItem}>
                            <FaTimes />
                        </div>
                    </div>
                }
                <SearchDropDown items={items} show={show && items.length > 0} onClick={onClick}/>
            </div>
            
        </div>
    )
}

export default GameElementInput