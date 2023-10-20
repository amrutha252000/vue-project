var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getposts', function(req, res, next){
  res.send('get req is working')
});

router.get('/setposts', function(req, res, next){
  res.send('post req is working')
});

module.exports = router;
