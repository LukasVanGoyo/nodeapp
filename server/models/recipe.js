var mongoose = require('mongoose')

const RecipeSchema = mongoose.Schema({

	_id: mongoose.Types.ObjectId,
	title: String,
	description: String,
	category: String,
	image: String,
	ingredients: Array,
	votes: { type: Number, default: 0 },
	votesQuantity: { type: Number, default: 0 },
	likes: { type: Number, default: 0 },
	preparation: Array,
	userId: Number,
	time: Number,
	date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('recipe', RecipeSchema)