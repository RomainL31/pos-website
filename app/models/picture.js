// app/models/picture.js
// grab the mongoose module
var mongoose 		= require('mongoose');
var Schema       	= mongoose.Schema;

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var PictureSchema   = new Schema ({
	id : {type : Number, default : null}, 			// picture's id. unique
    owner : {type : Number, default : null},		// owner's id
    date : {type : String, default : ''}			// picture's upload date
});

module.exports 		= mongoose.model('Picture', PictureSchema);