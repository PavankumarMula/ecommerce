import "./Card.css";
import { CartData } from "./CartContext";
import {  useContext } from "react";

const Cart = (props) => {
  const cartCtx=useContext(CartData);
  const Items= cartCtx.items;
  // const totalprice=cartCtx.totalprice

  const removeHandler = (item)=>{
    console.log('removing handler',item)
     cartCtx.removeFromCart(item);
  }
 
 
  return (<div className="carddisplay">
    <button style={{float:'right'}} onClick={props.onHideCart} >X</button>
      {Items.map(item=>{
        return  <ul key={item.id} className="ulclass">
          <li key={item.id}><h4>Title</h4>{item.title}</li>
          <li><h4>price</h4>{item.price} Quantity {item.Quantity}</li>
          <li><button id={item.id} style={{backgroundColor:'black',color:'red'}} onClick={()=>{removeHandler(item)}}>Remove</button></li>
        </ul>
      })}
     <center><h2>Total Price ${cartCtx.totalprice}</h2></center> 
  </div>)
 };
export default Cart;
