var mongoose = require('mongoose');
var planetsController = require('./planet.js');
//Require needed planets data here
var data = require('../info.json');

mongoose.connect('mongodb://localhost/Solar');


var insertAllplanets = function() {
//TODO: Insert all planets into your mongodb using planetsController

	console.log(data);
	for (var i = 0; i < data.length; i++) {
		planetsController.insert(data[i], function(err, result){
			if(err) throw err;
			console.log(result);
		})
	
	}
	
}
insertAllplanets()