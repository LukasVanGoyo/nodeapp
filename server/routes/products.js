var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Products = require('../models/product.js');

router.get('/products', (req, res) => {
	res.send("Wszystkie produkty")
});

router.post('/products/add', (req, res) => {
	console.log(req.body)
	console.log(req.body.name)
	var req = req.body

	 var product = new Products({
	 	_id: mongoose.Types.ObjectId(),
	 	name: req.name,
	 	description: req.description,
	 	category: req.category,
	 	image: req.image,
	 	prize: req.prize, 
		rates: req.rates,
		quantity: req.quantity,
		isAvaible: req.isAvaible
	 })

	 product.save()

	 res.json(req)
});


module.exports = router;