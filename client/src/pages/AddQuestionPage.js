import { useState, useEffect} from 'react';
import axios from 'axios' ;



const AddProductPage = () => {


	const [data, setData]  = useState([]);
  const[state, setState] = useState({})
	const[question, setQuestion] = useState('')
  const[correct, setCorrect] = useState('')
  const[answerA, setAnswerA] = useState('')
  const[answerB, setAnswerB] = useState('')
  const[answerC, setAnswerC] = useState('')
  const[category, setCategory] = useState('')

  	const onSubmit = () => {
    const quest = {
        question: question,
        correct: correct,
        answerA: answerA,
        answerB: answerB,
        answerC: answerC,
        category: category
      }
  		axios.post('http://localhost:3003/api/questions/add', quest)
  		.then((response) => {
			console.log(response.data)
			setData(response.data)
      setQuestion('')
      setCorrect('')
      setAnswerA('')
      setAnswerB('')
      setAnswerC('')
		})


  	};
     const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState(values => ({...values, [name]: value}))
  }
	return(
		<section className="add-question-wrapper">

    <form className="add-question-form">
      <h2>Dodaj nowe pytanie</h2>

      {state.question}

      {state.correct}
      <button type="button" onClick={onSubmit}> Dodaj pytanie </button>
    </form>


		</section>
		)
}

export default AddProductPage;