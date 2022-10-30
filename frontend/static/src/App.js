import { useState } from "react";
import Cookies from "js-cookie";
import Chat from "./components/Rooms/Chats/Chat";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Room from "./components/Rooms/Rooms";


function App() {

  // const [roomId, setRoomId] = useState({id:2});

  // const addRoomId = (newRoomId) => {
  //   setRoomId([...roomId, newRoomId]);
  // };

  // console.log("App RoomId", roomId, "App addRoomId", addRoomId)
  


  const [auth, setAuth] = useState(!!Cookies.get("Authorization"));
  return <>
  
   <Container fluid="md-4 w-50">
              <Row>
                <Col className= "products_list" md={{ span: 3, offset: 1 }}>
                <div>{auth ? <Room /> : <LoginForm setAuth={setAuth} />}</div>
                </Col>
                <Col className= "products_list" md={{ span: 3, offset: 3 }}>
                <div>{auth ? <Chat /> : <Register setAuth={setAuth} />}</div>
                </Col>
              </Row>
              {/* <div><Room /></div> */}
            </Container>
  {/* <Chat roomId={addRoomId}/>
  <Room addRoomId={addRoomId}/> */}
  </>;
}

export default App;
