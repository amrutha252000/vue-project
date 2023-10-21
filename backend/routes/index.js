var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setposts', function(req, res, next){
  res.json({msg:'post req is working'})
});

router.get('/getposts', function(req, res, next){
  res.json({msg:'get req is working'})
});
module.exports = router;
