import { useState, useEffect, useCallback, useReducer } from "react";
import Cookies from "js-cookie";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

var chatroom = 2;
function Chat({roomId}){
    const [newChats, setNewChats]= useState({message:"",author:"",time:"",room:Number});
    const [text, setText] = useState("");
    const[chats, setChats]= useState([])

    // const author = user.id;
    
    
    if(roomId > 0){
        chatroom = roomId;
        
    
    }
    
    
    

    console.log("Here is the roomId value", roomId, chatroom);
    
  
   

   

    const handleError = (err) => {
        console.warn(err);
    };

    const getChats = useCallback(async() => {

        console.log('RoomState chats',chatroom);
      
        const response = await fetch(`/api_v1/rooms/${chatroom}/chats/`).catch(handleError);
        if (!response.ok){
            throw new Error("Network response was not OK");
        } else {
            const data = await response.json();
            setChats(data);
            console.log("Mye Data",data);
        }

    },[]);

    useEffect(()=>{
        getChats();
    }, [getChats]);

    const cookie = String(Cookies.get("csrftoken"));

    

    const handleClick = () => {
        console.log(cookie);
        Cookies.remove(cookie,{path:''});
        console.log('Working log out' ,);  

      };

    const handleChange = (e) => {
    setNewChats((newChats) => ({
        ...newChats,
        
        message: e.target.value,
        author:2,
        time: new Date(),
        room:chatroom,
        
        
    }));
    
    }


    const handleSubmit = async (e) => {
    
        e.preventDefault();
        if (newChats.message==""){
            return
        }
        console.log({newChats})
        const options = {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(newChats),
        };
        
        console.log('Working ');
        console.log({newChats}, {chats} ,(options.body));
    
        const response = await fetch(`/api_v1/rooms/${chatroom}/chats/`, options).catch(
            handleError
        );
        if (!response.ok){
            throw new Error("Network didn't accept");
        } else {
            const data = await response.json();
            console.log(data);
        }
        setNewChats({message:"",author:"",time:"",room:Number});
        };

    console.log({chats})
    

    const chatItem = chats.map(({room, message }, id)=>(
        <div key={id}>
            <ul>{room}</ul>
            <ul>{message} </ul>
            
        </div>
    ));

 

    return <>
    
    <p>This is the Chat Box</p>
        <button onClick={handleClick}>Logout</button>


        <div>

    <Form onSubmit={handleSubmit}>
        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control 
            type="text" 
            placeholder="chats" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group> */}

        <Form.Group className="mb-4" controlId="message">
            <Form.Label> </Form.Label>
            <Form.Control 
            type="textarea" 
            name="message"
            value={newChats.message}
            onChange={handleChange}
            placeholder="Chat area" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
    </Form>
        
            {chatItem}
            </div>
    </>
}

export default Chat