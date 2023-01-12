import React from "react";
import { Container, Row, Card,Button } from "react-bootstrap";
import { useContext } from "react";
import { CartData } from "./CartContext";
import { Link } from "react-router-dom";

const productsArr = [
  {
    id:"1",
    title: "Album 1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id:"2",
    title: "Album 2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id:"3",
    title: "Album 3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id:"4",
    title: "Album 4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
  {
    id:"5",
    title:"T shirt",
    price:35,
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Shirt.png"
  },
  {
    id:"6",
    title:"T Cup",
    price:35,
    imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Cofee.png"
  }
];

const Grid = (props) => {
  const Cartctx=useContext(CartData);
  const clickhandler = (e) =>{
    let requiredobj={};
    for(let i=0;i<productsArr.length;i++){
      if(e.target.id===productsArr[i].id){
       requiredobj ={id:productsArr[i].id,
          title:productsArr[i].title,
          price:productsArr[i].price,
          image:productsArr[i].imageUrl
        }
      }
    }
    Cartctx.addToCart(requiredobj);
  }
  return (
    <>
    <Card style={{ width: "100%", backgroundColor: "lightsalmon", height: "100px" }}>
        <Card.Body className="d-flex justify-content-center">
          <Card.Text sty>
            <b style={{ fontSize: "50px" }}>The Genrics</b>
          </Card.Text>
        </Card.Body>
      </Card>
    <section>
    <Container className="mt-2">
      <center><h2>Items</h2></center>
      <Row className="mt-4" >
        {productsArr.map(item=>{
        return  <Card key={item.id} style={{ width: '18rem' ,margin:'2rem',padding:'2rem',backgroundColor:'lightgreen'}}>
         <Card.Img variant="top" src={item.imageUrl} />
         <Card.Body>
           <Card.Title>{item.title}</Card.Title>
           <Card.Text>
             ${item.price}
           </Card.Text>
           <Button id={item.id} variant="primary" onClick={clickhandler}>Add To Cart</Button>
            <Link to={`/products/${item.id}`} style={{marginLeft:'20px'}} >view</Link> 
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
