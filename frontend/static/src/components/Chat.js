import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Chat(props){
    const [newChats, setNewChats]= useState({message:"",author:"",time:"",room_name:""});
    const [text, setText] = useState("");
    const[chats, setChats]= useState([])

    // const author = user.id;

    const handleError = (err) => {
        console.warn(err);
    };

    const getChats = useCallback(async() => {
        const response = await fetch("/api_v1/chats/rooms/2/chats/").catch(handleError);
        if (!response.ok){
            throw new Error("Network response was not OK");
        } else {
            const data = await response.json();
            setChats(data);
        }

    },[]);

    useEffect(()=>{
        getChats();
    }, [getChats]);

    

    const handleClick = () => {
        localStorage.removeItem('All');
        console.log('Working ' ,)
       
        
      };

    const handleChange = (e) => {
    setNewChats((newChats) => ({
        ...newChats,
        message: e.target.value,
        author:1,
        time: new Date(),
        room_name:2,
    }));
    }

    //   const handleChange = (e) => {({
    //     message: e.target.value,
    //     author:"User1",
    //     time: new Date(),
    //     room_name:"2"}) => {
    //     setChats([...chats,{
    //         message:e.target.value,
    //         author:"User1",
    //         time: new Date(),
    //         room_name:"2"}]);}
    //     }



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
    
        const response = await fetch("/api_v1/chats/rooms/2/chats/", options).catch(
            handleError
        );
        if (!response.ok){
            throw new Error("Network didn't accept");
        } else {
            const data = await response.json();
            console.log(data);
        }
        setNewChats({message:"",author:"",time:"",room_name:""});
        };
    

//   const chatItem = chats.map(({message}, id)=>(
//     <div key={id}>
//         <li>{message}</li>
//     </div>
//   ))

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
        
            {/* {chatItem} */}
            </div>
    </>
}

export default Chat