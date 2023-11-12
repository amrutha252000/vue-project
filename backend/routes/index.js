var express = require('express');
var router = express.Router();
const SportData = require('../models/schema');

/*const bodyParser  = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));*/

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setposts',jsonParser, function(req, res, next){
  const newSport = new SportData({
    sportName:req.body.sportName,
    Headline: req.body.Headline,
    Content:req.body.Content,
  });
  resp_to_send = {
    author:req.body.Headline,
    content:req.body.Content
  }
  newSport.save().then(val => {
    if (newSport.sportName == 'badminton') {
      for (let i = 0; i < req.app.locals.badminton_sockets.length; i++) {
          req.app.locals.badminton_sockets[i].send(JSON.stringify(resp_to_send));
      }
    } 
    else if (newSport.sportName == 'cricket') {
      for (let i = 0; i < req.app.locals.cricket_sockets.length; i++) {
          req.app.locals.cricket_sockets[i].send(resp_to_send);
      }
    }
    else if (newSport.sportName == 'tennis') {
      for (let i = 0; i < req.app.locals.tennis_sockets.length; i++) {
          req.app.locals.tennis_sockets[i].send(resp_to_send);
      }
    }
    res.json({ msg: "post req is working", val: val })
  })

});

router.get('/getposts', function(req, res, next){
  SportData.find({sportName : 'batminton'}).sort({ createdAt: -1 }).limit(5).then((data)=>{
    console.log(data)
    console.log()
    res.json({posts:data})
  })
  .catch((err)=>{
    conslose.log("Error is")
    console.log(err)
    res.send("Error")
  })

});

module.exports = router;

