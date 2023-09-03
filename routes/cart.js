const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../middlewares');
// const User = require('../models/user');
// const Product = require('../models/product');
const { addtocart, removefromcart, opencart } = require('../controllers/cart');


router.post('/user/:productId/cart/add', isLoggedIn, addtocart);

router.post('/user/:productid/cart/remove', removefromcart)


router.get('/user/cart', isLoggedIn, opencart)


module.exports = router;