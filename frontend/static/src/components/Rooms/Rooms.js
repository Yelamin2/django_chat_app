import { useState, useEffect, useCallback } from "react";
import Cookies from "js-cookie";
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Room(props){
    const [rooms, setRooms]= useState();
    const [roomB, setRoomB] = useState({roomname:""});

    const handleError = (err) => {
        console.warn(err);
    };

    const getRoom = useCallback(async() => {
        const response = await fetch("/api_v1/chats/rooms/").catch(handleError);
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

    console.log({rooms})

   

    // const makeChange = (e) => {
    //     var x = document.getElementById("inputName");
    //     if(x.style.display ==="none"){
    //         x.style.display ="block";
    //     } else {
    //         x.style.display = "none";
    //     }
    // }

    const addRoom =async (e) => {
    
        e.preventDefault();
        console.log('room', roomB);
        if (roomB.roomname==""){
            return
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
        console.log({roomB}, {rooms} ,(options.body));
    
        const response = await fetch("/api_v1/chats/rooms/", options).catch(
            handleError
        );
        if (!response.ok){
            throw new Error("Network didn't accept");
        } else {
            const data = await response.json();
            console.log('data', data);
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
        <Form.Group className="mb-4" controlId="roomname:">
            <Form.Label> </Form.Label>
            <Form.Control 
            type="textarea"
            value={roomB.roomname}
            name="roomname"
            onChange={handleChange} />
            </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>

            
       
        
        
    
        </>
    );
}

export default Room