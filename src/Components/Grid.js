import React from "react";
import { Container, Row, Card,Button } from "react-bootstrap";
const productsArr = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Grid = () => {
  return (
    <>
    <Container className="mt-3">
      <center><h2>Music</h2></center>
      <Row className="mt-6" >
      {productsArr.map(item=>{
        return <Card style={{ width: '18rem' ,margin:'2rem',padding:'2rem'}}>
         <Card.Img variant="top" src={item.imageUrl} />
         <Card.Body>
           <Card.Title>{item.title}</Card.Title>
           <Card.Text>
             ${item.price}
           </Card.Text>
           <Button variant="primary">Add To Cart</Button>
         </Card.Body>
       </Card>
      })} 
      </Row>
      
    </Container>
    </>
  );
};
export default Grid;
