import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Chat from "./Chats/Chat";


function Room(){
    const [rooms, setRooms]= useState([]);
    const [roomB, setRoomB] = useState({roomname:""});
    const [roomId, setRoomId] = useState({id:2})
    

    const handleError = (err) => {
        console.warn(err);
    };

    const getRoom = useCallback(async() => {
        const response = await fetch("/api_v1/rooms/").catch(handleError);
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

    const roomsList = rooms.map(({room, id})=>(
        <div key={id}>
            <ul onClick={ ()=> {setRoomId({id}, room);

            console.log(roomId.id);
           
        }
                   
         } >{room}</ul>
            
            
            
        </div>
        
        
    ));

    

    console.log("RoomId",roomId, "AddRoomId")

   

   

    const addRoom =async (e) => {
    
        e.preventDefault();
        // console.log('room', roomB);
        if (roomB.room==""){
            return
        };

        const names=rooms.map(({room}) => room );
        console.log("names",names);

        if(names.includes(roomB.room) ){
            console.log('Pick other name, this already exists');
            return;
        }
      
        const options = {
            method:"POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": Cookies.get("csrftoken"),
            },
            body: JSON.stringify(roomB),
        };
        // console.log('Working rooms');
        // console.log({roomB}, {rooms} ,(options.body));
    
        const response = await fetch("/api_v1/rooms/", options).catch(
            handleError
        );
        if (!response.ok){
            throw new Error("Network didn't accept");
        } else {
            const data = await response.json();
            // console.log('data', data);
        }
        // setRoomB({roomname:""});
    };

    // const handleInput= (e) => {
    //     setNewRoom((newRoom) =>
    //     ({...newRoom, [e.target.value]:e.target.value }));
    // };
    
    const handleChange = (e) => {
        setRoomB((roomB) => ({
            ...roomB,
            [e.target.name]:e.target.value

        }));
           
        }
    
    
    


    
    return (
        <>
        {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            Rooms
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">rooms</Dropdown.Item>
            <Dropdown.Item href="#/action-3" onClick={makeChange}>Add Room</Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown> */}
        <Form onSubmit={addRoom}>
        <Form.Group className="mb-4" controlId="room">
            <Form.Label> </Form.Label>
            <Form.Control 
            type="textarea"
            value={roomB.room}
            name="room"
            onChange={handleChange} />
            </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>

        <div>{roomsList}</div>

            {<Chat roomId={roomId.id}/>}
        
        
        
    
        </>
    );
}

export default Room