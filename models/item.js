var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
	itemName: {
		type: String,
		required: true
	}
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;