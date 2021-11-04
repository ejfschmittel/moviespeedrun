import {useState, useEffect} from "react";

const useDebounce = (value, timeout) => {
    // Save a local copy of `value` in this state which is local to our hook
    const [state, setState] = useState(value);

    useEffect(() => {
        // Set timeout to run after delay
        const handler = setTimeout(() => {
            console.log("afte rtimeout")
            setState(value)
        }, timeout);

        // clear the setTimeout listener on unMount
        return () => clearTimeout(handler);
    }, [value, timeout]);

    return state;
};

export default useDebounce;