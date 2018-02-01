var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	itemName: {
		type: String,
		required: true
	},
	ownerId: {
		type: String,
		required: true
	},
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