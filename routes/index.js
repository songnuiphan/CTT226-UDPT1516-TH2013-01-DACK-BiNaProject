var express = require('express');
var mongoose = require('mongoose');
var User = require('../models/users');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./index');
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
    res.redirect('/');
});


module.exports = router;