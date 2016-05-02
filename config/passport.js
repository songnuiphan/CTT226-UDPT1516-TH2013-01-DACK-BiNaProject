/*!
 * Module dependencies.
 */

var mongoose = require('mongoose');
var User = require('../models/users');
var local = require('./passport/local');
var LocalStrategy = require('passport-local').Strategy;

exports.config = function(passport) {
    // serialize sessions
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.load({
            criteria: { _id: id },
            select: 'name email username status mood avatar friends blocks'
        }, function(err, user) {
            done(err, user);
        });
    });

    // use these strategies
    passport.use(local);
}
