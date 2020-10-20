import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Products from './components/Products/Products';
import ProductDetailContainer from './components/Products/ProductDetailContainer';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart/Cart';
import CartProvider from './context/cartContext';
import TotalProvider from './context/totalContext';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">      
      <Router>
            <CartProvider>
              <TotalProvider>        
        <NavBar />  
          <Switch>
            <Route exact path="/products/:productId" >
              <ProductDetailContainer />
            </Route>
            <Route exact path="/products/category/:categoryId" >
              <Products />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route exact path="/">
              <Home greetings="Welcome to the Store"/>
            </Route>
          </Switch>
            </TotalProvider>
            </CartProvider>
    </Router> 
   
    </div>
  );
}

export default App;
