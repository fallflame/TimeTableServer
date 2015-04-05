var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

var username = "timetable";
var password = "jn243qk3n4gf";
var address = '@ds063870.mongolab.com:63870/timetable'; connect();
// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address;
  mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}