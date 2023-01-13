import React, { useContext, useEffect, useState } from "react";
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
 
useEffect(()=>
{
   if(authCtx.isLoggedIn)
   {
    fetch(`https://crudcrud.com/api/1669cb33c2404f52a57ebefc5d928adb/data${Email}`)
    .then(res=>res.json().then(data=>{
    let array=[]
    for(let i=0;i<data.length;i++){
        array.push(data[i].object[0])
    }
    setCurrentCart(prevCart=>{
        const updatedItems=prevCart.items.concat(array)
        let sum=0
        for(let i=0;i<updatedItems.length;i++){
            sum=sum+updatedItems[i].price
        }
        prevCart.items=updatedItems;
        prevCart.totalprice=sum;
        return prevCart;
    })

    }))
   }
},[])



  let Email = authCtx.email;
    Email=Email.replace('@','').replace('.','');

  console.log(Email)
  const addToCartHandler = (obj) => 
  {

    fetch(`https://crudcrud.com/api/1669cb33c2404f52a57ebefc5d928adb/data${Email}`,
    {
        method:'POST',
        body:JSON.stringify({
            mode:'no-cors',
            object:[obj],
        }),
        headers: {
            "Content-Type": "application/json"
       },
    }).then(res=>{
        if(res.ok){
            res.json().then(data=>setCurrentCart(prevCart=>{
                const updatedItems=prevCart.items.concat(data.object);
                let sum=0;
                for(let i=0;i<updatedItems.length;i++){
                    sum=sum+updatedItems[i].price
                }
              prevCart.items=updatedItems;
              prevCart.totalprice=sum
              console.log(prevCart)
              return prevCart;
            })).catch(err=>console.log(err))
        }
    })
  };








  const removeFromCartHandler = (obj) => {
    setCurrentCart((prevCart) => {
      let updatedprice = prevCart.totalprice - obj.price;
      let filtered = prevCart.items.filter((item) => item.id !== obj.id);
      return {
        items: filtered,
        totalprice: updatedprice,
      };
    });
    console.log(currentCart)
  };

  const CartInfo = {
    items: currentCart.items,
    totalprice: currentCart.totalprice,
    addToCart: addToCartHandler,
    removeFromCart: removeFromCartHandler,
  };

  return (
    <CartData.Provider value={CartInfo}>{props.children}</CartData.Provider>
  );
};
export default CartContext;
