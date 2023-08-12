const Product = require('./models/product');
const Review =  require('./models/review');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/e-com-db')
    .then(()=>{console.log('e-com-db connected!!')})
    .catch((err) => console.log(err));

const dummy_data = [
    {
        name:'Drone',
        image:'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        price:200,
        desc:'Ziria Foldable Toy Drone with HQ WiFi Camera Remote Control for Kids Quadcopter with Gesture Selfie, Flips Bounce Mode'
    },
    {
        name:'Iphone',
        image:'https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:150,
        desc:'The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. '
    },
    {
        name:'Macbook',
        image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:200,
        desc:'The MacBook is a brand of Mac notebook computers designed and marketed by Apple Inc. that use Apples macOS operating system since 2006.'
    },
    {
        name:'Nike Shoes',
        image:'https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlrZSUyMHNob2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
        price:60,
        desc:'Nike Air is our iconic innovation that uses pressurized air in a durable, flexible membrane to provide lightweight cushioning.'
    },
    {
        name:'Watch',
        image:'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0Y2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
        price:120,
        desc:'A watch is a portable timepiece intended to be carried or worn by a person. It is designed to keep a consistent movement despite the motions caused by the persons activities.'
    },
    {
        name:'Headphones',
        image:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
        price:220,
        desc:'Headphones are electronic audio device that people wear over their ears. They let people hear sounds on a walkman, MP3 player, mobile phone or computer. Headphones come in many different sizes from big to small.'
    },
    {
        name:'Lawn Mower',
        image:'https://plus.unsplash.com/premium_photo-1679444931817-5b76fe77efd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhd24lMjBtb3dlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
        price:150,
        desc:'A lawn mower is a machine used to mow grass or plants. This machine is commonly used to tidy up the garden and also to clear the fields from grass or other types of grass.'
    }
];


async function seedData(){
    // await Review.deleteMany({});
    await Product.deleteMany({});
    await Product.create(dummy_data);
    console.log('DB seeded!');
}

seedData();