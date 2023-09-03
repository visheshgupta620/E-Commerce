const User = require('../models/user');
const Product = require('../models/product');


module.exports.addtocart = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);

        const userId = req.user._id;
        const user = await User.findById(userId);

        let ind = -1;
        const item = user.cart.find((item, index) => {
            if (item.productId.equals(product._id)) {
                ind = index;
                return item;
            }
        });

        if (item) {
            user.cart[ind].quantity++;
        } else {
            user.cart.push({ productId: product._id });
        }

        await user.save();

        req.flash('success', 'Item added to cart');
        res.redirect('back');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.removefromcart = async (req, res) => {
    try {
        const { productid } = req.params;                        //string milegi but compare objectid se krna isliye product nikalna pdega poora
        const product = await Product.findById(productid);
        const userid = req.user._id;
        const user = await User.findById(userid);
        var i = 0;
        for (let item of user.cart) {
            if (item.productId.equals(product._id)) {
                if (item.quantity == 1) {
                    user.cart.splice(i, 1);
                }
                else {
                    user.cart[i].quantity--;
                }
            }
            i++;
        }

        await user.save();

        req.flash('success', 'Action Performed');
        res.redirect('back');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.opencart = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).populate('cart.productId');

        var total = 0;
        for (let item of user.cart) {
            total += item.productId.price * item.quantity;
        }

        res.render('cart/index', { cart: user.cart, totalbill: total });
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}