require('dotenv').config();
const express = require('express');
const router = express.Router();
// const Order = require('../../models/order');
// const Razorpay = require('razorpay');
// const { validatePaymentVerification } = require('razorpay/dist/utils/razorpay-utils');
const { isLoggedIn } = require('../../middlewares');
const { getkeyid, createorderandpassamount, paymentverification } = require('../../controllers/paymentapi');
// const { RAZORPAY_KEY_ID, RAZORPAY_SECRET_KEY } = process.env;

router.get('/keyid', isLoggedIn, getkeyid);

router.post('/order', isLoggedIn, createorderandpassamount);

router.post('/payment-verify', paymentverification);


module.exports = router;