import "./App.css";
import Grid from "./Components/Grid";
import Cart from "./Components/Cart";
import NavBar from "./Components/NavBar";
import { useState } from "react";
import CartContext from "./Components/CartContext";
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
      <NavBar onClickHandler={cartShownHandler}></NavBar>
      <Grid></Grid>
  </CartContext>
  );
}

export default App;
