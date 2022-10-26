import { useState } from "react";
import Cookies from "js-cookie";
import Chat from "./components/Rooms/Chat";
import LoginForm from "./components/LoginForm";
import Register from "./components/Register";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Room from "./components/Rooms/Rooms";


function App() {
  


  const [auth, setAuth] = useState(!!Cookies.get("Authorization"));
  return <>
  
   <Container fluid="md-4 w-50">
              <Row>
                <Col className= "products_list" md={{ span: 4, offset: 2 }}>
                <div>{auth ? <Chat /> : <LoginForm setAuth={setAuth} />}</div>
                
                </Col>
                <Col className= "products_list" md={{ span: 3, offset: 3 }}>
                <div>{auth ? "" : <Register setAuth={setAuth} />}</div>
  
                </Col>
              </Row>
              <div><Room /></div>
            </Container>
  
  </>;
}

export default App;
