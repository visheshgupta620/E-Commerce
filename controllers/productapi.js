const Product = require('../models/product');
const User = require('../models/user');


module.exports.wishlistaddremove = async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        const isExist = req.user.wishList.includes(product._id);

        if (isExist) {
            req.user = await User.findByIdAndUpdate({ _id: req.user._id }, { $pull: { wishList: productId } }, { new: true });
        }
        else {
            req.user = await User.findByIdAndUpdate({ _id: req.user._id }, { $addToSet: { wishList: productId } }, { new: true });
        }

        res.status(200).json({
            success: true
        })
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}