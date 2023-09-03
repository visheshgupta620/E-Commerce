const Product = require('../models/product');
const Review = require('../models/review');



module.exports.addreview = async (req, res) => {
    try {
        const { productId } = req.params;
        const { rating, comment } = req.body;

        console.log('Review Added!');

        const newReview = await Review.create({ rating, comment });
        const product = await Product.findById(productId);

        const newAvgRating = ((product.avgRating * product.reviews.length) + parseInt(req.body.rating)) / (product.reviews.length + 1);
        product.avgRating = parseFloat(newAvgRating.toFixed(1));

        product.reviews.push(newReview);

        await product.save();
        await newReview.save();

        req.flash('success', 'Successfully added your review!');
        res.redirect('back')
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}




module.exports.removereview = async (req, res) => {
    try {
        const { productId } = req.params;
        const { reviewId } = req.params;
        const product = await Product.findById(productId);
        const rev = await Review.findById(reviewId);
        await Review.findByIdAndDelete(reviewId);
        var i = 0;
        for (let review of product.reviews) {
            if (review._id.equals(rev._id)) {
                product.reviews.splice(i, 1);
                break;
            }
            i++;
        }
        await product.save();

        req.flash('success', 'Review Deleted Successfully!');
        res.redirect('back');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}