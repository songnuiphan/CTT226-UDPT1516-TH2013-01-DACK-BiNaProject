var express = require('express');
var router = express.Router();

/* GET room Homepage. */
router.get('/', function(req, res, next) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));
});

/* GET search room. */
router.get('/search', function(req, res, next) {
    
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({}));
});

module.exports = router;
