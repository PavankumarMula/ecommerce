
import { Container, Navbar,  Button} from "react-bootstrap";
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
          <Link to='/ContactUs'> <li className="d-inline" style={{marginRight:"30px"}}>
            Contact Us
          </li></Link>
          <Link to='/Login'> <li className="d-inline" style={{marginRight:"30px"}}>
           LogIn
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
    </>
  );
};
export default NavBar;
