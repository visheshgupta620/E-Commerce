const express = require('express');
const router = express.Router();
const { isLoggedIn } = require('../../middlewares');
// const Product = require('../../models/product');
// const User = require('../../models/user');
const { wishlistaddremove } = require('../../controllers/productapi');

router.post('/products/:productId/like', isLoggedIn, wishlistaddremove);

module.exports = router;                                                                                                                                                