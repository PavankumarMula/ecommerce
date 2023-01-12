// import { Fragment } from "react";
import { AuthData } from "../AuthContext";
import  {useParams}  from "react-router-dom";
import { Card } from "react-bootstrap";
import { useContext } from "react";
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
const ProductDetail = (props) => {
   const data=useContext(AuthData)
   console.log(data)
  const params = useParams();
  const deatailElement =productsArr.find(item=>item.id===params.productId)
  return (
    <center>
       <Card style={{ width: '25rem' ,margin:'10px'}}>
      <Card.Img variant="top" src={deatailElement.imageUrl} />
      <Card.Body>
        <Card.Title>{deatailElement.title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
          <div>
           <h2>Price  ${deatailElement.price}</h2>
          </div>
        </Card.Text>
      </Card.Body>
      <Card.Body>
      </Card.Body>
    </Card>
          </center>
  );
};
export default ProductDetail;
