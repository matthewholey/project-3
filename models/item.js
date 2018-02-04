var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user.js');
var userSchema = mongoose.model('User').Schema;

var itemSchema = new Schema({
	itemName: {
		type: String,
		required: true
	},
	ownerId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	requests: [{
		userId: Schema.Types.ObjectId,
		name: String,
		ref: 'User'
	}],
	isBorrowed: [{
		borrowerId: {
			type: String
		},
		borrowerTrue: {
			type: String,
			default: "borrow"
		}
	}]
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;