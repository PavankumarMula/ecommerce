import "./App.css";
import Grid from "./Components/Grid";
import About from "./Components/About";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
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
      <Route path="/home" exact component={Grid}>

      </Route>
      <Route path='/store' exact component={Grid}>
</Route>
<Route path='/about' exact component={About}>
</Route>
     </Switch>
     </BrowserRouter>
  </CartContext>
  );
}

export default App;
