import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";

function Chat(){
    const [chats, setChats]=useState(null);
    const [text, setText] = useState("");

    const handleError = (err) => {
        console.warn(err);
    };
    const handleClick = () => {
        localStorage.removeItem('All');
        console.log('Working ')
       
        
      };

    
    return <>
    <p>This is the Chat Box</p>
    <button onClick={handleClick}>Logout</button>
    </>
}

export default Chat