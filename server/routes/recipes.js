var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Recipes = require('../models/recipe.js');

router.get('/recipes', (req, res) => {
	Recipes.find({}, (recipe, err) => {
		res.send(recipe)
	})
});



router.post('/recipes/add', (req, res) => {
	console.log(req.body)
	var req = req.body

	 var recipe = new Recipes({
	 	_id: mongoose.Types.ObjectId(),
	 	title: req.title,
	 	description: req.description,
	 	category: req.category,
	 	image: req.image,
	 	ingredients: req.ingredients,
	 	preparation: req.preparation,
	 	userId: req.userId,
	 	time: req.time

	 })

	 recipe.save()

	 res.json(req)
});


module.exports = router;