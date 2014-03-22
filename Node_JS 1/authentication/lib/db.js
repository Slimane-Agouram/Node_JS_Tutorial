var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

// Connect to cloud database
var username = "slimane";
var password = "03081990";
var address = '@ds039437.mongolab.com:39437/nodejs_book';

connect();

// Connect to mongo
function connect() {
  var url = 'mongodb://' + username + ':' + password + address;
  console.log("le lien DB est : " + 'mongodb://' + username + ':' + password + address);

  mongoose.connect(url);
}

function disconnect() {
	mongoose.disconnect();
	console.log("deconnecté");
}
