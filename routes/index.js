var express = require('express');
var router = express.Router();
var getAllPuppies = require('../workers/getAllPuppies');

var express = require('express');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 router.get('/api/puppies', require('../workers/getAllPuppies'));
 router.get('/api/puppies/:id', require('../workers/getSinglePuppy'));
// router.post('/api/puppies', db.createPuppy);
// router.put('/api/puppies/:id', db.updatePuppy);
// router.delete('/api/puppies/:id', db.removePuppy);

module.exports = router;
