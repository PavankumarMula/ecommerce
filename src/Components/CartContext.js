import React, { useCallback, useContext, useEffect, useState } from "react";
import { AuthData } from "../AuthContext";

export const CartData = React.createContext({
  items: [],
  CartItems: 0,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
});

const defaultCart = {
  items: [],
  totalprice: 0,
};
const CartContext = (props) => {
  const [currentCart, setCurrentCart] = useState(defaultCart);
  const authCtx = useContext(AuthData);
  let Email = authCtx.email;
  Email = Email.replace("@", "").replace(".", "");
  console.log(Email);

 useEffect(()=>{
  if(authCtx.isLoggedIn){

    fetch(`https://crudcrud.com/api/39fffe0172774a59b9282d470228554a/${Email}`)
    .then(res=>res.json().then(data=>
      {
        setCurrentCart(prevCart=>{
          let sum=0,refreshedcart=[];
         for(let i=0;i<data.length;i++){
         refreshedcart.push(data[i].item)
          sum=sum+ data[i].item.price * data[i].item.Quantity
         }
         return {
          items:refreshedcart,
          totalprice:sum
         }
        })
      }
      
      
      )).catch(err=>console.log(err))
  }
 
 },[Email,authCtx.isLoggedIn])





  const addToCartHandler = async (item) => {
    const res = await fetch(
      `https://crudcrud.com/api/39fffe0172774a59b9282d470228554a/${Email}`,
      {
        method: "POST",
        body: JSON.stringify({item}),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();

    setCurrentCart((prevcart) => {
      const updatedprice = prevcart.totalprice + item.price * item.Quantity;
      const existingitemindex = prevcart.items.findIndex(
        (previtem) => previtem.id === item.id
      );
      const existingitem = prevcart.items[existingitemindex];
      let updateditem;
      let updatedItems;
      if (existingitem) {
        updateditem = {
          ...existingitem,
          Quantity: existingitem.Quantity + item.Quantity,
        };
        updatedItems = [...prevcart.items];
        updatedItems[existingitemindex] = updateditem;
      } else {
        updateditem = { ...item };
        updatedItems = prevcart.items.concat(item);
      }
      return {
        items: updatedItems,
        totalprice: updatedprice,
      };
    });
  };

  const removeFromCartHandler = async (item) => {
    let apiid = "";
    const res = await fetch(
      `https://crudcrud.com/api/39fffe0172774a59b9282d470228554a/${Email}`
    );
    const data = await res.json();
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (item.id === data[i].item.id) {
        apiid = data[i]._id;
      }
    }
    await fetch(
      `https://crudcrud.com/api/39fffe0172774a59b9282d470228554a/${Email}/${apiid}`,
      {
        method: "DELETE",
      }
    );

    setCurrentCart((prevCart) => {
      const existingitemindex = prevCart.items.findIndex(
        (previtem) => previtem.id === item.id
      );
      const existingitem = prevCart.items[existingitemindex];
      const updatedtotalprice = prevCart.totalprice - existingitem.price;
      let updatedItems;
      if (existingitem.Quantity === 1) {
        updatedItems = prevCart.items.filter(
          (prevcart) => prevcart.id !== item.id
        );
      } else {
        const updateditem = {
          ...existingitem,
          Quantity: existingitem.Quantity - 1,
        };
        updatedItems = [...prevCart.items];
        updatedItems[existingitemindex] = updateditem;
      }
      return {
        items: updatedItems,
        totalprice: updatedtotalprice,
      };
    });
  };

  const CartInfo = {
    items: currentCart.items,
    totalprice: currentCart.totalprice,
    CartItems: currentCart.items.length,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartData.Provider value={CartInfo}>{props.children}</CartData.Provider>
  );
};
export default CartContext;
