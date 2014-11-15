var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var config = require('./config/config');
var mongoose = require("mongoose");

var app = express();

var port = process.env.PORT || 3000;


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/views')));
app.use('/stylesheets',express.static(path.join(__dirname,'public/javascripts/stylesheets')));
app.use('/controllers',express.static(path.join(__dirname,'public/javascripts/controllers')));


var connect = function(){
   var options = {
      server: {
         socketOptions:{
            keepAlive : 1
         }
      }
   };
   mongoose.connect(config.db,options);
};
connect();
mongoose.connection.on('error',console.log);
mongoose.connection.on('disconnected',connect);


require('./config/routes')(app);
require('./config/express')(app);
module.exports = app;
