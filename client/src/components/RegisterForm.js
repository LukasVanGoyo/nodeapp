import '../styles/RegisterForm.css';
import { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {

	const InitialState = {
      name: '',
      email: '',
      password: ''
    }

    const[user, setUser] = useState(InitialState)

    const handleChange = (event) => {
    	const name = event.target.name;
        const value = event.target.value;
        setUser(values => ({...values, [name]: value}))
    }

	const onSubmit = (e) => {
		e.preventDefault()

		axios.post('http://localhost:3003/api/register', user)
		.then((response) => {
          console.log(response.data)
  		  })



	}

	return(
		<div className="register-form-wrapper">
		<form className="register-form">


			<label className="register-form-label">Imię</label>
			<input className="register-form-input" name="name" type="text" onChange={handleChange}/>
			<label className="register-form-label">Email</label>
			<input className="register-form-input" name="email" type="email" onChange={handleChange} />
			<label className="register-form-label">Hasło</label>
			<input className="register-form-input" name="password" type="password" onChange={handleChange} />

			<button className="register-form-btn" type="submit" onClick={onSubmit}>Zarejestruj</button>

		</form>

		{ user.name }
		</div>
		)
}

export default RegisterForm;