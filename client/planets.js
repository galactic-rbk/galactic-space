var mongoose = require('mongoose');

var planetSchema = new mongoose.Schema({
	name: String , 
	info : String,
	Discovery:String,
	NamedFor:String,
	Diameter:String,
	Orbit:String,
	Day:String
});

var planetModel = mongoose.model('Planet', planetSchema);

module.exports = planetModel;
