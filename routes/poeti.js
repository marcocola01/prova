var express = require('express');
var router = express.Router();
var file_poeti = require('../poeti.json');

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/api/p', function(req, res, next) {
    res.send(file_poeti);
    console.log(file_poeti);
  //res.render('index', { title: 'Express' });
});

router.get('/api/:email', function(req, res, next) {
 let poeta_trovato = file_poeti.poeti.find(poeta => poeta.email == req.params.email);
    res.send(poeta_trovato);
    console.log(poeta_trovato);
});

module.exports = router;