var express = require('express');
var router = express.Router();
const SportData = require('../models/schema');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/setposts', function(req, res, next){
  console.log(req.body)
  const newSport = new SportData({
    sportName:req.body.sportName,
    Headline: req.body.Headline,
    Content:req.body.Content,
  });
  resp_to_send = {
    Headline:req.body.Headline,
    Content:req.body.Content
  }
  newSport.save().then((resp, err) => {
    if(err){
      console.log(err)
      return
    }
    if (newSport.sportName == 'batminton') {
      for (let i = 0; i < req.app.locals.badminton_sockets.length; i++) {
          req.app.locals.badminton_sockets[i].send(JSON.stringify(resp_to_send));
      }
    } 
    else if (newSport.sportName == 'cricket') {
      for (let i = 0; i < req.app.locals.cricket_sockets.length; i++) {
          req.app.locals.cricket_sockets[i].send(JSON.stringify(resp_to_send));
      }
    }
    else if (newSport.sportName == 'tennis') {
      for (let i = 0; i < req.app.locals.tennis_sockets.length; i++) {
          req.app.locals.tennis_sockets[i].send(JSON.stringify(resp_to_send));
      }
    }
    res.send({ msg: "post req is working"})
  })

});

router.post('/getposts', function(req, res, next){
  SportData.find({sportName : req.body.sportName}).sort({ createdAt: -1 }).limit(7).then((data)=>{
    console.log(data)
    res.json({posts:data})
  })
  .catch((err)=>{
    console.log("Error is")
    console.log(err)
    res.send("Error")
  })
 });

module.exports = router;

