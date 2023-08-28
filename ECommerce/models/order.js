const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    _id:String,
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    amount:Number,
    paymentStatus:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})         //timestamps store hojayenge ye likhne se

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;