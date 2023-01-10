import "./App.css";
import Grid from "./Components/Grid";
import About from "./Components/About";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import { useState } from "react";
import CartContext from "./Components/CartContext";
import { BrowserRouter,Switch,Route } from "react-router-dom";
function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);
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
      <Route path='/store' exact component={Grid}>
</Route>
<Route path='/about' exact component={About}>
</Route>

    <Route path="/home" exact component={Home}></Route>
    <Route path="/ContactUs" exact component={Contact}></Route>
    </Switch>
     </BrowserRouter>
  </CartContext>
  );
}

export default App;
