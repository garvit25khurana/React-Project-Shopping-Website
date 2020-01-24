import React, { Component } from 'react';
// import NavBar from './NavBar';
import Carousel1 from './Carousel';
// import Product from './product';
// import Products from '../Data/Data';


class Home extends Component
{
    constructor()
    {
        super();
        this.state = {
            // cart: [
    
            //     {
            //       id: 4,
            //       name: "Product4",
            //       img: "./products/4.jpg",
            //       price: 100,
            //       units: 1
            //     }
              
            //   ]

        }
    }


    

     

    render()
    {
        
        return(
            <div>
      
      <Carousel1 />
      {/* { Products.map(p => <Product key={p.id} {...p} addCart={this.handleAddCart} deleteCart={this.handleDelete} />) } */}
      {/* { this.state.cart.map(c => <li key={c.id}>{c.name} | units:{c.units}</li>)} */}

          

    </div>
        )
    }
}

export default Home;