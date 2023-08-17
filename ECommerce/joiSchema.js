const Joi = require('joi');

module.exports.productSchema = Joi.object({
    name: Joi.string().required(),
    image:Joi.string().required(),
    price: Joi.number().min(0).required(),
    desc: Joi.string().required()
});

module.exports.reviewSchema = Joi.object({});



// hum frontend aur backend dono me validation dete for more security
// to front end validation ke liye humne bootstrap se validation form uthaya jiski html aur js hai likhi humne
// but front end ko bypass krna easy hota hai isliye humne backend validation ke liye joi ko use kra
//  to like generally hum use krenge site to frontend validation hi dikhegi hume form me kuch galat bhara toh 
//  but agar koi usko bypass kar jata hai to we have joi for it . thus , more Security .   (frontend bypass hone par bhi backend validation(joi) bacha lega)