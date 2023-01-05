import React from "react";
import  ReactDOM  from "react-dom";
import "./Card.css";
const Cart = (props) => {
  const cartElements = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  return ReactDOM.createPortal(<div className="carddisplay">
     <div>
        <button onClick={props.onHideCart} style={{float:'right'}}>X</button>
      </div>
    <center><h2>Cart</h2></center>
      <div className="contents">
       <ul className="ulclass">{cartElements.map((item=>{
       return <li key={Math.random()}><h4>ITEM</h4>{item.title} <h4>Price</h4>{item.price} <h4>Quantity</h4>{item.quantity} <h4>TOTAL</h4></li>
       }))}</ul>
      </div>
    </div>,document.getElementById('blur'))
};
export default Cart;
