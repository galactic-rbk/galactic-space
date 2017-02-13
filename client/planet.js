var planetModel = require('./planets.js');

// findAll retrieves all planets from the database 
function findAll(callback) {
  planetModel.find({}, callback);
}

// findOne will retrieve the planet associated with the given id
function findOne(id, callback) {
  planetModel.findOne({id: id}, callback);
}

// findByName will retrieve the planet associated with the given name
function findByName(name, callback) {
  CharacterModel.find({name: name}, callback);
}
 
// insert inserts a planet into the db
function insert(planet, callback) {
  planetModel.create(planet, callback);
}

exports.findOne = findOne;
exports.findByName = findByName;
exports.findAll = findAll;
exports.insert = insert;
