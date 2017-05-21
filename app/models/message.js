// app/models/message.js
// grab the mongoose module
var mongoose 		= require('mongoose');
var Schema       	= mongoose.Schema;

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var MessageSchema   = new Schema ({
	id : {type : Number, default : null}, 			// user's id. unique
    recv : {type : Number, default : null},			// receiver's id
    send : {type : Number, default : null},			// sender's id
    text : {type : String, default : ''},			// message's content
    recv_status : {type : String, default : ''},	// receiver's message status. sent/received/deleted
    send_status : {type : String, default : ''},	// sender's message status. sent/received/deleted
    date : {type : String, default : ''}			// date of message's last modification
});


module.exports 		= mongoose.model('Message', MessageSchema);