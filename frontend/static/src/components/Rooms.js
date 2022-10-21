import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

function Room(){
    const [rooms, setRooms]=useState(null);
    const [text, setText] = useState("");

    const handleError = (err) => {
        console.warn(err);
    };

    
    return 
}

export default Room