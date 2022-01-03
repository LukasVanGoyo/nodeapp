import axios from 'axios'
import { useState, useEffect } from 'react';


const Question = ({ question }) => {
	const [state, setState] = useState([])


	return(
		<div>
			<h4> { question.question }</h4>

		</div>
		)
}





export default Question;

