import React from "react";
import { Container, Row, Card,Button } from "react-bootstrap";
const productsArr = [
  {
    id:1,
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:2,
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:3,
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:4,
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id:5,
    title:"T shirt",
    price:35,
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
  },
  {
    id:6,
    title:"T Cup",
    price:35,
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
  }
];

const Grid = () => {
  return (
    <>
    <section>
    <Container className="mt-3">
      <center><h2>Items</h2></center>
      <Row className="mt-6" >
        {productsArr.map(item=>{
        return  <Card key={item.id} style={{ width: '18rem' ,margin:'2rem',padding:'1rem'}}>
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
    </section>
    
    </>
  );
};
export default Grid;
