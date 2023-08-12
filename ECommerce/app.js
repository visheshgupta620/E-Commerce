const express = require('express');
const app = express();
const path = require('path');                                  //
const mongoose = require('mongoose');                          //to connect express and mongoDB
const ejsMate = require('ejs-mate');                           //to create and use layout (boilerplate)
const methodOverride = require('method-override');             //to send patch and delete request
const session = require('express-session');                    //connect-flash session hone pe hi work krta
const flash = require('connect-flash');                        //flash krna info vagara ko uske liye jaise item added , deleted vagara pop-up krane

mongoose.connect('mongodb://127.0.0.1:27017/e-com-db')
    .then(() => { console.log('e-com-db connected!!') })
    .catch((err) => console.log(err));


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));

app.use(session({                           //session kyunki flash tbhi work krta   //github se ye code
    secret: 'weneedbettersecret',
    resave: false,
    saveUninitialized: true,
}))

app.use(flash());                          //session ke baad hi chlega ye

app.use((req, res, next)=>{                //middleware  //local use krna pdta success ko access krne ke liye
    res.locals.success = req.flash('success');
    next();
})

app.get('/', (req, res) => {
    res.send('Working Fine!');
});


// ------------- routes
const productRoutes = require('./routes/product');
const reviewRoutes = require('./routes/review');

app.use(productRoutes);
app.use(reviewRoutes);


const PORT = 5000;
app.listen(PORT, () => {
    console.log('Server is Up at Port ', PORT);
});