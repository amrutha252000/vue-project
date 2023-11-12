var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const WebSocket = require('ws');
const url = require('url');

const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://AmruthaKunati:Amrutha22@cluster0.unhnf4t.mongodb.net/")
.then(()=>{
  console.log("db connected")
})
.catch(()=>{
  console.log("db couldn't connected")
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var data_json_batminton = {
  "author":"someone",
  "content":"Something"
}

var data_json_cricket = {
  "author":"cricket",
  "content":"neeku avvasarama"
}
var data_json_tennis = {
  "author":"tennis",
  "content":"neeku avvasarama"
}

app.locals.badminton_sockets = []
app.locals.cricket_sockets = []
app.locals.tennis_sockets = []

const server = new WebSocket.Server({port: 8081});
server.on('connection',function connection(ws,req){
  const location = url.parse(req.url, true);
  switch (location.pathname) {
    case '/batminton/':
      ws.send(JSON.stringify(data_json_batminton))
      app.locals.badminton_sockets.push(ws)
      break;
    case '/cricket/':
      ws.send(JSON.stringify(data_json_cricket))
      app.locals.cricket_sockets.push(ws)
      break;
    case '/tennis/':
      ws.send(JSON.stringify(data_json_tennis))
      app.locals.tennis_sockets.push(ws)
      
      break;
    default:
      ws.send('invalid page request');
      ws.close();
      break;
  }
});

/*const server = new WebSocket.Server({
  port: 8081,
});
server.on('connection', (socket) => {
  console.log(socket)
  socket.on('message', (message) => {
    console.log(message);  
  });
  var data_json = {
    "author":"Someone",
    "content":"Something"
  }
  socket.send(JSON.stringify(data_json));
});*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
