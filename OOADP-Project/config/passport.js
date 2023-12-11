var LocalStrategy = require('passport-local').Strategy;
var member = require('../models/memberModel');
var passport = require('passport');

module.exports = function (passport) {
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            if (email)
                email = email.toLowerCase();

            var isValidPassword = function (userpass, password) {
                return userpass === password;
            }

            process.nextTick(function () {
                member.findOne({ where: { email: email } }).then((user) => {
                    if (!user)
                        return done(null, false, { message : 'No such user!' });
                    if (!isValidPassword(user.password, password))
                        return done(null, false, { message : 'Wrong Password!' });
                    else {
                        req.user = user.get();
                        return done(null, user.get());
                    }
                }).catch((err) => {
                    console.log("Error:", err);
                    return done(err, false, { message : 'Error!' })
                });
            });
        }));

    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
        function (req, email, password, done) {
            if (email)
                email = email.toLowerCase();
            process.nextTick(function () {
                if (!req.user) {
                    member.findOne({ where: { email: email } }).then((user) => {
                        if (user) {
                            return done(null, false, { message : 'Email has been taken!' });
                        } else {
                            var userData = {
                                name: req.body.name,
                                username : req.body.username,
                                email: email,
                                password: password,
                                phone : req.body.phone
                            }

                            member.create(userData).then((newUser, created) => {
                                if (!newUser) {
                                    return done(null, false);
                                }
                                if (newUser) {
                                    return done(null, newUser);
                                }
                            })
                        }
                    }).catch((err) => {
                        console.log("Error:", err);
                        return done(err, false, { message : 'Error!' });
                    });
                } else {
                    return done(null, req.user);
                }
            });
        }));
};