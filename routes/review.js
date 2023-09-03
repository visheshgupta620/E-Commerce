const express = require('express');
const router = express.Router();
// const Product = require('../models/product');
// const Review = require('../models/review');
const { isLoggedIn } = require('../middlewares');
const { addreview, removereview } = require('../controllers/review');



router.post('/products/:productId/review', isLoggedIn, addreview);

router.delete('/products/:productId/:reviewId/remove',removereview)


module.exports = router;