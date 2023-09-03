const User = require('../models/user');
const passport = require('passport');



module.exports.registerpage = async (req, res) => {
    try {
        res.render('auth/register')
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.loginpage = async (req, res) => {
    try {
        res.render('auth/login')
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.registration = async (req, res) => {
    try {
        const { username, password, role, email } = req.body;

        const user = new User({ username, role, email });
        const newUser = await User.register(user, password);

        // console.log(newUser);
        await newUser.save();

        req.flash('success', 'You are registered successfully!');
        res.redirect('/login');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.login = async (req, res) => {
    try {
        req.flash('success', `Welcome, ${req.user.username}!`);
        res.redirect('/products');
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}

module.exports.logout = async (req, res) => {
    try {
        req.logout(function (err) {
            if (err) { return next(err); }

            res.redirect('/login');
        });
    }
    catch (e) {
        res.render('error', { err: e.message });
    }
}