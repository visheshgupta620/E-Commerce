const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,                //spaces daali ho shuruat me to unko hata dega
        required:true
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    desc:{
        type:String,
        trim:true
    }
});

const Product = mongoose.model('Product',productSchema);

module.exports=Product;