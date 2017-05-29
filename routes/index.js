var express = require('express');
var router = express.Router();

module.exports = function(app) {
    app.get('/', function (req, res, next) {
        res.render('index', { title: 'Express' });
    });
    
    app.get('/login', function (req, res, next) {
        res.send('<h1>log in<\h1>');
    });
}

/* GET home page. */
//router.get('/', function(req, res, next) {
//  res.render('index', { title: 'Express' });
//});

//module.exports = router;
