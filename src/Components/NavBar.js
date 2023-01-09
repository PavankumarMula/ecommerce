
import { Container, Navbar, Nav, Button, Card } from "react-bootstrap";
import { CartData } from "./CartContext";
import { useContext } from "react";
import {Link} from 'react-router-dom';
const NavBar = (props) => {

const CartCtx=useContext(CartData);
const length=CartCtx.items.length;
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
        <ul className="list-unstyled" style={{color:'white'}}>
        <Link to='/home'><li className="d-inline" style={{marginRight:"30px"}} >
            Home
          </li></Link>  
         <Link to='/store'><li className="d-inline" style={{marginRight:"30px"}}>
            Store
          </li></Link> 
          <Link to='/about'> <li className="d-inline" style={{marginRight:"30px"}}>
            About
          </li></Link>
         
        </ul>
          <Button
            variant="primary"
            className="mt-2"
            onClick={props.onClickHandler}
          >
            {" "}
            <span>Cart</span> {length}
          </Button>
        </Container>
      </Navbar>
      <Card style={{ width: "100%", background: "grey", height: "100px" }}>
        <Card.Body className="d-flex justify-content-center">
          <Card.Text>
            <b style={{ fontSize: "50px" }}>The Genrics</b>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default NavBar;
