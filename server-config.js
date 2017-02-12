var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Solar');


var app = express();

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.redirect('/index')
})



module.exports = app;
