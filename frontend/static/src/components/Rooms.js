import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";


function Room(){
    const [rooms, setRooms]=useState(null);
    const [text, setText] = useState("");

 

    const getRoom = useCallback(async() => {
        const response = await fetch("/api_v1/chats/rooms/")
        if (!response.ok){
            throw new Error("Network response was not OK");
        } else {
            const data = await response.json();
            setRooms(data);
        }

    },[]);

    useEffect(()=>{
        getRoom();
    }, [getRoom]);

    

    
    return (
        <>
        {{getRoom}}
        </>
    )
}

export default Room