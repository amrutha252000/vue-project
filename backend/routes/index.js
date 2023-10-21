var express = require('express');
var router = express.Router();
const Sport = require('../models/schema');

/*const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));*/

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setposts', function(req, res, next){
  const newSport = new Sport({
    sportdes: req.body.sportdes,
    time_stamp: req.body.time_stamp,
  });
  newSport.save().then(val => {
    res.json({ msg: "post req is working", val: val })
  })
});

router.get('/getposts', function(req, res, next){
  res.json({msg:'get req is working'})
});
module.exports = router;
