var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();



app.use(bodyParser.json());

app.use(express.static(__dirname + "/client"));

// app.get('/', function(request, response) {
//   response.render('index');
// });

// app.get('/' , function(request , response){
// 	response.send('hahahahhaha')
// })


 
var port = 3000;

app.listen(process.env.PORT || port);

console.log('Server now listening on port ' + port);

module.exports = app;
