const Order = require('../models/order');
const Razorpay = require('razorpay');
const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils');
const { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } = process.env;





module.exports.getkeyid = async (req, res) => {
    try {
        res.json({
            keyid: RAZORPAY_KEY_ID
        })
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.createorderandpassamount = async (req, res) => {
    try {
        const instance = new Razorpay({ key_id: RAZORPAY_KEY_ID, key_secret: RAZORPAY_SECRET_KEY })
        const { amount } = req.body;
        const options = {
            amount: parseInt(amount) * 100,
            currency: "INR",
        };

        const order = await instance.orders.create(options);
        await Order.create({
            _id: order.id,
            user: req.user,
            amount
        })

        res.json({
            sucess: true,
            order
        })
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.paymentverification = async (req, res) => {
    try {
        const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body;

        const isValid = validatePaymentVerification({ "order_id": razorpay_order_id, "payment_id": razorpay_payment_id }, razorpay_signature, RAZORPAY_SECRET_KEY);

        if (isValid) {
            await Order.findByIdAndUpdate({ _id: razorpay_order_id }, { paymentStatus: true })
            return res.status(200).json({
                success: true,
                msg: 'Payment successfull'
            })
        }

        res.json({
            succes: false,
            msg: 'Payment unsuccessfull'
        })
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}