//dummy data daalne ke liye file taki test kar sake // main project se alag hoti ye cheez  //alalg se iss file ko chlake db me data add hojaeyga test ke liye
const mongoose = require('mongoose');
const Product = require('./models/product');


mongoose.connect('mongodb://127.0.0.1:27017/e-com-db')
    .then(() => {
    console.log('e-com-db connected!');
    })
    .catch((err) => {
        console.log(err);
    })


const dummy_data = [
    {
        name:'Drone',
        image:'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price:200,
        desc:' A drone is a flying robot that can be remotely controlled or fly autonomously using software-controlled flight plans in its embedded systems'
    },
    {
        name:'Iphone',
        image:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
        price:150, 
        desc:'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface'   
    },
    {
        name:'Watch',
        image:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        price:180, 
        desc:'A watch is a portable timepiece intended to be carried or worn by a person'
    },
    {
        name:'Shoes',
        image:'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5pa2UlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',       
        price:110, 
        desc:'A shoe is an item of footwear intended to protect and comfort the human foot'
    }
]


async function seeddata(dummy_data){
    await Product.deleteMany({});
    await Product.create(dummy_data);
}
seeddata(dummy_data);