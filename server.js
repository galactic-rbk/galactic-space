var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var planetRouter = require('./router.js');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/Solar');


app.use(bodyParser.json());

app.use(express.static(__dirname + "./client"));

app.use('/api/planets', planetRouter);


 
var port = 3000;

app.listen(process.env.PORT || port);

console.log('Server now listening on port ' + port);

module.exports = app;
