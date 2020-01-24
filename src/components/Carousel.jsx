import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';

class Carousel1 extends Component {
    state = {  }
    render() { 

        const myStyle = 
        {
            height: "550px",
            padding: "10px"
        }
        return (
            <Carousel interval="2000">
                <Carousel.Item><div style={myStyle}>
                 <Link to='/products'>   <img src={require("./assets/1.jpg")} alt="picture 1" width="100%" height="100%" /></Link>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item><div style={myStyle}>
                <Link to='/products'>  <img src={require("./assets/2.jpg")} alt="picture 1" width="100%" height="100%" /></Link>
                    </div>
                    
                </Carousel.Item>
                <Carousel.Item><div style={myStyle}>
                <Link to='/products'>  <img src={require("./assets/3.jpg")} alt="picture 1" width="100%" height="100%" /></Link>
                    </div>
                    
                    </Carousel.Item>
            </Carousel>
          );
    }
}
 
export default Carousel1;