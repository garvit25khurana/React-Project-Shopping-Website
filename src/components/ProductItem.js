import React from 'react';
import Card from 'react-bootstrap/Card';

export default class ProductItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			quantity: 1
		}
	}

	handleInputChange = event => this.setState({[event.target.name]: event.target.value})

	addToCart = () => {
		let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {};
		let id = this.props.product.id.toString();
		cart[id] = (cart[id] ? cart[id]: 0);
		let qty = cart[id] + parseInt(this.state.quantity);
		if (this.props.product.available_quantity < qty) {
			cart[id] = this.props.product.available_quantity; 
		} else {
			cart[id] = qty
		}
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	render(){
		const { product } = this.props;
		return (
		    <div style={{ marginBottom: "10px", float:"left", padding:"20px"}}>
			  <Card style={{ width: '18rem' }}>
			  <Card.Body>
			  <Card.Title>{product.name}</Card.Title>
			  <Card.Title><img src={product.img} width="170px" height="170px"/></Card.Title>
			  <Card.Text>{product.description}</Card.Text>
			  <Card.Text><small>price: </small>{product.price}</Card.Text>
			  <Card.Text><small>Available Quantity: </small>{product.available_quantity}</Card.Text>
			    
			    { product.available_quantity > 0 ?
			    	<div>
			    		<button className="btn btn-sm btn-warning float-right" onClick={this.addToCart}>Add to cart</button>
			    		<input type="number" value={this.state.quantity} name="quantity" onChange={this.handleInputChange} className="float-right" style={{ width: "60px", marginRight: "10px", borderRadius: "3px"}}/>
			    	</div> : 
			    	<p className="text-danger"> product is out of stock </p>
			 	}
				</Card.Body>
			  </Card>
			</div>
		)
	}
}
