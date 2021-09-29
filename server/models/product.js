var mongoose = require('mongoose')

const productSchema = mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	name: String,
	description: String,
	category: String,
	image: Object,
	prize: Number,
	rates: Number,
	quantity: Number,
	isAvaible: Boolean
});

module.exports = mongoose.model('product', productSchema)