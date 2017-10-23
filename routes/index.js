var express = require('express');
var router = express.Router();

var express = require('express');
var app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


 router.get('/api/tasks', require('../workers/getAllTasks'));
 router.get('/api/tasks/:id', require('../workers/getSingleTask'));
 router.post('/api/tasks/', require('../workers/addSingleTask'));
 router.delete('/api/tasks/:id', require('../workers/deleteSingleTask'));
 router.put('/api/tasks/:id', require('../workers/updateSingleTask'));

module.exports = router;
