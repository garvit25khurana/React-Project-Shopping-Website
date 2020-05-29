const products = [
  {
    name: 'Sony Noise Cancelling Headphones',
    img: 'https://images-na.ssl-images-amazon.com/images/I/61D4Z3yKPAL._SL1500_.jpg',
    available_quantity: 5,
    price: 21000,
    description: 'Industry Leading Noise Cancelling Headphones'
  },

  {
    name: 'JBL Speaker',
    img: 'https://www.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwcc4bce64/JBL_Flip4_Black_Hero.jpg?sw=626&sh=626&sm=fit&sfrm=png',
    available_quantity: 7,
    price: 7000,
    description: 'Waterproof Portable Bluetooth Speaker with Rich Deep Bass'
  },

  {
    name: 'Canon EF 16-35mm lens',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81lYscypdKL._SL1500_.jpg',
    available_quantity: 0,
    price: 144990,
    description: 'High performance L-series ultra-wide-angle zoom lens'
  },

  {
    name: 'RICOH Theta Z1 360° Camera',
    img: 'https://images-na.ssl-images-amazon.com/images/I/8113LBHfcML._SY879_.jpg',
    available_quantity: 4,
    price: 87999,
    description: '23MP (6720 x 3360, approx. 7K)'
  },
];



const users = [
    {
      'name': 'Garvit',
      'password': '1234'
    },
    {
      'name': 'Madhav',
      'password': '1234'
    }
];

module.exports = { 'products': products, users: users }