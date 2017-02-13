var express = require('express');
var planetsController = require('./client/planet.js');

var router = express.Router();

router.route('/')
	.get(function(req, res) {
		 // TODO: Send back planets you've retrieved from the database
		 planetsController.findAll(function(err, results){
		 	if(err) throw err;
		 	res.status(200).json(results);
		 });

	});
 
module.exports = router;
