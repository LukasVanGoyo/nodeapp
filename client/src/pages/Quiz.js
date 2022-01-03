import { useState, useEffect } from 'react';
import axios from 'axios';
import Question from '../components/Question.js'


const Quiz = () => {
	const[questions, setQuestions] = useState([]);
	const[random, setRandom] = useState('')
	const[randomNumbers, setRandomNumbers] = useState([])


	useEffect(() =>{
	axios.get('http://localhost:3003/api/questions')
	.then(res => {
		setQuestions(res.data)

	})

	},[])



	const randomNumber = () => {
		if(randomNumbers.length === questions.length){
			alert('koniec pytań')
			return null
		}
		else{
			let r = Math.floor(Math.random() * (questions.length));
			if(!randomNumbers.includes(r)){

			randomNumbers.push(r)
			console.log(r)
			return r;
		}
		else{
			randomNumber()
		}

		}

	}


const x = () => {
		var r = randomNumber();
		questions.map((q, i) => {
			if(r === i ){
				setRandom(q.question)
				return true
			}
			return true
		})
	}




	return(
		<section className="quiz-wrapper">
			<div className="quiz-box">





				<div className="question-area">

{ random }

			</div>
			<button onClick={randomNumber}>OK</button>

			<button onClick={x} >Start</button>

			</div>

		</section>
		)
}

export default Quiz;