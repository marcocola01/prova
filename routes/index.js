var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/web/poeti:email', function(req, res, next) {
 let poeta_trovato = file_poeti.poeti.find(poeta => poeta.email == req.params.email);
    res.render('poeti', { title: 'Lista Poeti', poeta: poeta_trovato});
});

module.exports = router;
