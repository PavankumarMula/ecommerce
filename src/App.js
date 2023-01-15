import "./App.css";
import Grid from "./Components/Grid";
import About from "./Components/About";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import React, { useContext, useState } from "react";
import CartContext from "./Components/CartContext";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail";
import LogIn from "./LogIn";
import { AuthData } from "./AuthContext";

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);
  const authCtx=useContext(AuthData)
  
  
  const cartShownHandler = () => {
    setCartIsShown(!cartIsShown);
  };
  const cartHideHandler = () => {
    setCartIsShown(false);
  };

  return (
   
    <CartContext>
      {cartIsShown && <Cart onHideCart={cartHideHandler}></Cart>}
      <BrowserRouter>
        <NavBar onClickHandler={cartShownHandler}></NavBar>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
         {authCtx.isLoggedIn && (<Route path="/store" exact component={Grid}></Route>)}
          <Route path="/about" exact component={About}></Route>

          <Route path="/home" exact component={Home}></Route>
          <Route path="/ContactUs" exact component={Contact}></Route>
           <Route path="/Login" exact component={LogIn}></Route>
          <Route
            path='/products/:productId'
            exact
            component={ProductDetail}
          ></Route>
          <Route path='*'>
            <Redirect to='/Login' />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartContext>
  )
}

export default App;
