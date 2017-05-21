// app/models/user.js
// grab the mongoose module
var mongoose 		= require('mongoose');
var Schema       	= mongoose.Schema;

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var UserSchema   = new Schema ({
	id : {type : Number, default : null}, 			// user's id. unique
    name : {type : String, default : ''},			// user's onscreen name
    description: {type : String, default : ''},		// user's introduction
    email : {type : String, default : ''},			// user's email address
    password : {type : String, default : ''},		// user's password
    location : {type : String, default : ''},		// user's current city
    age : {type : Number, default : null},			// user's age
 	occupation : {type : String, default : ''}		// user's occu
	// add friend ids array
});

module.exports 		= mongoose.model('User', UserSchema);