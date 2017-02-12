var mongoose = require('mongoose');

var planetSchema = mongoose.Schema({
	id: Number,
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

