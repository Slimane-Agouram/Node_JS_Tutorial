var db = require('../lib/db');

var UserSchema = new db.Schema({
    username : {type: String, unique: true}
  , password : String
})

var MyUser = db.mongoose.model('User', UserSchema);

// Exports
module.exports.addUser = addUser;

// Add user to database
function addUser(username, password, callback) {
  var instance = new MyUser();
  instance.username = username;
  console.log("username ici lu :" + username);
  instance.password = password;
    console.log("passname ici lu :" + password);

  instance.save(function (err) {
    if (err) {
      callback(err);
    }
    else {
      console.log("successfully saved to the database");
      callback(null, instance);
    }
  });
}