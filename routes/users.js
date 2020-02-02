var express = require('express');
var router = express.Router();
const fs = require('fs');
var faker = require('faker');



function createFakePerson()
{
 let randomName = faker.name.findName(); // Rowan Nikolaus
 let randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
 let randomCard = faker.helpers.createCard(); // random contact card containing many properties

 let person = {
   name:randomName,
   email:randomEmail,
   card: randomCard
 }
 return person;
}


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/generate', function(req, res, next) {
   let pulmino = []; //new Array()
    for (let index = 0; index < 10; index++) {
        pulmino.push(createFakePerson());
    }

    let formato = { poeti : pulmino};

    let data = JSON.stringify(formato);
    fs.writeFileSync('poeti.json', data);
    
    res.send("file genrato");
});


module.exports = router;
