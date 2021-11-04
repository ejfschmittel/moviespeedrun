import React, { useDebugValue, useEffect, useState } from "react";

import GameElementInput, {useGameElementInput} from "../components/GameElementInput.component";







const CreateGamePage = () => {

    const gameElementInputPropsOne = useGameElementInput()
    const gameElementInputPropsTwo = useGameElementInput()

    return (
        <div className="page-container">
            <GameElementInput label={"from"} {...gameElementInputPropsOne}/>
            <GameElementInput label={"to"} {...gameElementInputPropsTwo}/>
        </div>
    )
}

export default CreateGamePage