const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');


router.post('/products/:productId/review', async (req, res)=>{
    const {productId} = req.params;
    const {rating, comment} = req.body;

    console.log('Review Added!');

    const newReview = await Review.create({rating, comment});
    const product = await Product.findById(productId);
    product.reviews.push(newReview);

    product.save();

    req.flash('success', 'Successfully added your review!');
    res.redirect('back')
});


module.exports = router;