
import Cart from "./Cart";
import { Container, Navbar, Nav,Button ,Card} from "react-bootstrap";
const NavBar = (props) => {

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="d-flex justify-content-between">
          <Nav >
            <Nav.Link href="#home"><h2><b>Home</b></h2></Nav.Link>
            <Nav.Link href="#features"><h2><b>Store</b></h2></Nav.Link>
            <Nav.Link href="#pricing"><h2><b>About</b></h2></Nav.Link>
          </Nav>
          <Button variant="primary" className="mt-2" onClick={props.onClickHandler}> <span>Cart</span> 0 </Button>
        </Container>
      </Navbar>
      <Card style={{ width: '100%',background:'grey',height:'150px'}}>
      <Card.Body className="d-flex justify-content-center">
        <Card.Text>
          <b style={{fontSize:'50px'}}>The Genrics</b>
        </Card.Text>
      </Card.Body>
    </Card>
    </>
  );
};
export default NavBar;
