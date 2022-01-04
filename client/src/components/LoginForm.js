import '../styles/LoginForm.css';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {

	const InitialState = {
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

		axios.post('http://localhost:3003/api/login', user)
		.then((response) => {
          console.log(response.data)
  		  })



	}

	return(
		<div className="login-form-wrapper">
		<h3> Login</h3>
		<form className="login-form">



			<label className="login-form-label">Email</label>
			<input className="login-form-input" name="email" type="email" onChange={handleChange} />
			<label className="login-form-label">Hasło</label>
			<input className="login-form-input" name="password" type="password" onChange={handleChange} />

			<button className="login-form-btn" type="submit" onClick={onSubmit}>Zaloguj się</button>

		</form>


		</div>
		)
}

export default LoginForm;