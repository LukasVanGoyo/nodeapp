import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';


const AddFile = () => {
	
	const imageHandler = (event) => {
	const file = event.target.files[0]
	const formData = new FormData()
	formData.append('image', file)

	fetch('http://localhost:3003/api/add/photo', {
		method: 'POST',
		body: formData,
		headers: {
			'Accept': 'multipart/form-data',
		}
	}).then(res => res.json()).then(res => console.log(res.data)).catch(error => { console.log(error)})
}

	return(
		<>
		<form>
		<input type="file" name="image" accept="image/*"  onChange={imageHandler} />
		<button type="submit">submit</button>
		</form>
		</>
		)
}

export default AddFile;