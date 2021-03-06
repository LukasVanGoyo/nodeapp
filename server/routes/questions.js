var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Questions = require('../models/question.js');

router.get('/questions', (req, res) => {
	Questions.find({}, (err, q) => {
		res.json(q)
	})
});

router.get('/questions/:id', (req, res) => {
	var rand = req.params.id;
	Questions.aggregate([ {$sample: { size: rand}}]).exec(
		function(err,result){
			res.json(result)
			console.log(req.params.id)
		}
		)
});


router.post('/questions/add', (req, res) => {
	console.log(req.body)

	var req = req.body

	 var question = new Questions({
	 	_id: mongoose.Types.ObjectId(),
	 	question: req.question,
		correct: req.correct,
		answerA: req.answerA,
		answerB: req.answerB,
		answerC: req.answerC,
		category: req.category
	 })

	 question.save()

	 res.json(req)
});


module.exports = router;