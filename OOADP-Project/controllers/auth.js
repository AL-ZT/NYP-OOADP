var passport = require('passport');

exports.signin = function(req, res) {
    res.render('login', { title: 'Login - PCHub'});
};

exports.signup = function(req, res) {
    res.render('register', { title: 'Register - PCHub'});
};

exports.logout = function (req, res) {
    req.logout();
    res.redirect('/');
};

exports.isLoggedIn = function(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/login');
};