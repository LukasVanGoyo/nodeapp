import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import { useState } from 'react'

const AddFile = () => {

const[image, setImage] = useState(null);
const[data, setData] = useState([])
	const imageHandler = (event) => {
	const file = event.target.files[0]
	const formData = new FormData()
	formData.append('image', file)
	setImage(formData)
	console.log(formData)

}

const upload = (event) => {
	 event.preventDefault();
fetch('http://localhost:3003/api/add/photo', {
		method: 'POST',
		body: image,
		headers: {
			'Accept': 'multipart/form-data',
		}
	}).then(res => res.json()).then(res => setData(res.data.filename)).catch(error => { console.log(error)})
}

	return(
		<>
		<form>
		<input type="file" name="image" accept="image/*" onChange={imageHandler} />
		<button type="submit" onClick={upload} >submit</button>
		</form>
{ data }
		</>
		)
}

export default AddFile;