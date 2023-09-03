// const express = require('express');
// const router = express.Router();

const router = require('express').Router();
// const User = require('../models/user');
const passport = require('passport');
const { registerpage, loginpage, registration, login, logout } = require('../controllers/auth');

router.get('/register', registerpage)

router.get('/login', loginpage)

router.post('/register', registration);

// router.post('/login', 

// passport.authenticate('local', {
//         failureRedirect: '/login'
//     },
//     next()  
// ), 

// (req, res)=>{
//     req.flash('success', `Welcome, ${req.user.username}`);
//     res.redirect('/products');    
// })

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), login);

router.get('/logout', logout)

module.exports = router;