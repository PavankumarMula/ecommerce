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
  let Email = authCtx.email;
  Email = Email.replace("@", "").replace(".", "");

  useEffect(() => {
  
    if (authCtx.isLoggedIn) {
      fetch(
        `https://crudcrud.com/api/91fba752bcdb46a39575ca7546f8caac/${Email}`
      ).then((res) =>
        res.json().then((data) => {
          let array = [];
          for (let i = 0; i < data.length; i++) {
            array.push(data[i].object[0]);
          }
          setCurrentCart((prevCart) => {
            const updatedItems = prevCart.items.concat(array);
            console.log(updatedItems);
            let sum = 0;
            for (let i = 0; i < updatedItems.length; i++) {
              sum = sum + updatedItems[i].price;
            }
            prevCart.items = updatedItems;
            prevCart.totalprice = sum;
            return prevCart;
          });
        })
      );
    }
    
    
  },[]);

  const addToCartHandler = (obj) => {
    fetch(
      `https://crudcrud.com/api/91fba752bcdb46a39575ca7546f8caac/${Email}`,
      {
        method: "POST",
        body: JSON.stringify({
          object: [obj],
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        res
          .json()
          .then((data) =>
            setCurrentCart((prevCart) => {
              const updatedItems = prevCart.items.concat(data.object);
              let sum = 0;
              for (let i = 0; i < updatedItems.length; i++) {
                sum = sum + updatedItems[i].price;
              }
              prevCart.items = updatedItems;
              prevCart.totalprice = sum;
              console.log(prevCart);
              return prevCart;
            })
          )
          .catch((err) => console.log(err));
      }
    });
  };

  const removeFromCartHandler = (obj) => {
    console.log(obj);
    fetch(
      `https://crudcrud.com/api/91fba752bcdb46a39575ca7546f8caac/${Email}`
    ).then((res) =>
      res.json().then((data) => {
        let id = "";
        for (let i = 0; i < data.length; i++) {
          if (data[i].object[0].id === obj.id) {
            id = data[i]._id;
          }
        }
        console.log(id, obj.id);
        fetch(
          `https://crudcrud.com/api/91fba752bcdb46a39575ca7546f8caac/${Email}/${id}`,
          {
            method: "DELETE",
          }
        ).then((res) => {
          if (res.ok) {
            setCurrentCart((prevCart) => {
              let updatedprice = prevCart.totalprice - obj.price;
              let filtered = prevCart.items.filter(
                (item) => item.id !== obj.id
              );
              prevCart.items = filtered;
              prevCart.totalprice = updatedprice;
              return prevCart;
            });
          }
        });
      })
    );
  };
  useEffect(()=>{
    removeFromCartHandler()
  },[])

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
