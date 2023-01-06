import React,{ useState} from "react";
export const CartData=React.createContext({
    items:[],
    CartItems:0,
    addToCart:(item)=>{},
    removeFromCart:(id)=>{}
});

const defaultCart={
    items:[],
    totalprice:0
}
const CartContext = (props) =>{
    const[currentCart,setCurrentCart]=useState(defaultCart)
    const addToCartHandler = (item) =>{
        setCurrentCart((prevCart)=>{
            let sum=0;
          const updatedItems=prevCart.items.concat(item);
          for(let i=0;i<updatedItems.length;i++){
                sum=sum+updatedItems[i].price;
          }
         return{
            items:updatedItems,
            totalprice:sum
         }
        })
    }
    const removeFromCartHandler = (obj) =>{
         setCurrentCart((prevCart)=>{
            let updatedprice=prevCart.totalprice-obj.price
          let filtered= prevCart.items.filter(item=>item.id!==obj.id)
           return {
            items:filtered,
            totalprice:updatedprice
           }
         })
        
    }
    const CartInfo={
        items:currentCart.items,
        totalprice:currentCart.totalprice,
        addToCart:addToCartHandler,
        removeFromCart:removeFromCartHandler
    }

    return <CartData.Provider value={CartInfo}>
        {props.children}
    </CartData.Provider>
}
export default CartContext;
