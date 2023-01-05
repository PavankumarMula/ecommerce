import { ReactDOM } from 'react';
import './App.css';
import Grid from './Components/Grid';
import Cart from './Components/Cart';
import NavBar from './Components/NavBar';
import { useState } from 'react';
function App(props) {
 const [cartIsShown,setCartIsShown]=useState(false);
 const cartShownHandler= ()=>{
  setCartIsShown(!cartIsShown);
 }
 const cartHideHandler= ()=>{
  setCartIsShown(false);
 }

  return (
    <>
      {cartIsShown && <Cart onHideCart={cartHideHandler}></Cart>}
      <NavBar onClickHandler={cartShownHandler}></NavBar>
      <Grid></Grid>
      
    </>
  );
}

export default App;
