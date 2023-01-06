import "./Card.css";
import { CartData } from "./CartContext";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx=useContext(CartData);
  const Items= cartCtx.items;
  // const totalprice=cartCtx.totalprice

  const removeHandler = (event)=>{
    let obj={}
    for(let i=0;i<Items.length;i++){
      if(event.target.id===Items[i].id){
        obj={
          id:Items[i].id,
          title:Items[i].title,
          price:Items[i].price,
          image:Items[i].image
        }
      }
    }
    cartCtx.removeFromCart(obj);
  }
 
  return (<div className="carddisplay">
    <button style={{float:'right'}} onClick={props.onHideCart} >X</button>
      {Items.map(item=>{
        return  <ul key={item.id} className="ulclass">
          <li key={item.id}><h4>Title</h4>{item.title}</li>
          <li><h4>price</h4>{item.price}</li>
          <li><h4>image</h4><img src={item.image} alt="bgm" style={{width:'6rem',height:'4rem'}}></img> </li>
          <li><button id={item.id} style={{backgroundColor:'black',color:'red'}} onClick={removeHandler}>Remove</button></li>
        </ul>
      })}
     <center><h2>Total Price ${cartCtx.totalprice}</h2></center> 
  </div>)
 };
export default Cart;
