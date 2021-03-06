var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    if (req.isAuthenticated()) {
        res.render('./index');
    } else {
        if (req.method == 'GET') req.session.returnTo = req.originalUrl;
        res.redirect('/login');
    }
});

router.get('/home', function(req, res, next) {
    
});

/* GET signup page */
router.get('/register', function(req, res, next) {
    res.render('./user/register', {});
});

router.post('/register', function(req, res, next) {
    console.log(req.body);
    var user = new User(req.body);
    user.provider = 'local';
    user.save(function(err, data) {
        console.log('Signup: ' + err);
        console.log('Signup: ' + data);
    });
    res.redirect('/login');
});

router.get('/login', function(req, res, next) {
    res.render('./user/login', {});
});

router.get('/logout', function(req, res, next) {
    req.logout();
    res.redirect('/login');
});

exports.router = router;


/**
 * Session
 */

exports.session = login;

/**
 * Login
 */

function login(req, res) {
    const redirectTo = req.session.returnTo ? req.session.returnTo : '/';
    delete req.session.returnTo;
    res.redirect(redirectTo);
}