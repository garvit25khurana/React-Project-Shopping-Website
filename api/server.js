'use strict';

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');
const middleware = require('./middleware');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongouri = "mongodb://localhost:27017/mydb";
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true, };

mongoose.connect(mongouri, mongoOptions);

const productSchema = new Schema({
      name: String,
      img: String,
      available_quantity: {
        type: Number, default:0
      },
      price: Number,
      description: String
})

const userSchema = new Schema({
  name: String,
  password: String
})

const products = mongoose.model('product', productSchema, 'products');
products.collection.insertMany(data.products, (err) => {
  if(err) throw err;
  console.log("docs inserted");
})

const users = mongoose.model('user', userSchema, 'users');
users.collection.insertMany(data.users, (err) => {
  if(err) throw err;
  console.log("users inserted");
})

// console.log(data.products);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/products', (req, res) => {
  return res.json(data.products);
});

app.post('/api/products', (req, res) => {
  // let products = [], id = null;
  // let cart = JSON.parse(req.body.cart);
  // if (!cart) return res.json(products)
  // for (var i = 0; i < data.products.length; i++) {
  //   id = data.products[i].id.toString();
  //   if (cart.hasOwnProperty(id)) {
  //     data.products[i].qty = cart[id]
  //     products.push(data.products[i]);
  //   }
  // }
  // return res.json(products);
  let tempProducts = [];
  products.find((err, docs) => {
    if(err) throw err;
    return res.json(docs);
  })
  

});

app.post('/api/auth', (req,res) => {
  // let user = data.users.filter((user) => {
  //   return user.name == req.body.name && user.password == req.body.password;
  // });
  let userArray = [];
  users.find((err, docs) => {
    if(err) throw err;
    userArray = docs;
  })
  let user = userArray.filter((user) => {
      return user.name == req.body.name && user.password == req.body.password;
    });

  if (user.length){
      let token_payload = {name: user[0].name, password: user[0].password};
      let token = jwt.sign(token_payload, "jwt_secret_password", { expiresIn: '2h' });
      let response = { message: 'Token Created, Authentication Successful!', token: token };

      
      return res.status(200).json(response);

  } else {
      return res.status("409").json("Authentication failed. admin not found.");
  }
});

const PORT = 5000;

app.listen(PORT);
console.log('api running on port ' + PORT + ': ');