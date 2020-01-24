import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import NavBar from './components/NavBar';
// // import Carousel1 from './components/Carousel';
// import Product from './components/product';

import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import ProductList from './components/ProductList';
import Cart from './components/cart/cart';




class App extends Component
{  
  
  
  render()
  {
  return (
    <div>
      <NavBar/>
      <Router>
    <Switch>
            
            <Route path="/products" component={ProductList}/>
            <Route path="/cart" component={Cart} />
            <Route path="/home" component={Home}/>

            <Route path="/" component={Home} />
            </Switch>
            
            
</Router>
      

          

    </div>
  );
  }
}

export default App;

