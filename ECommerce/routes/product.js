//index vale app ko yha use krna hai to uske liye hota router 
const express = require('express');
const router = express.Router();
const product = require('../models/product');


router.get('/products',(req,res)=>{
    res.send('Hello from products');
})

module.exports=router;