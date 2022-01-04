const router = require('express').Router();
const User = require('../models/user.js');
const bcrypt = require('bcryptjs');

const { registerValidation, loginValidation } = require('../validation.js')


router.post('/register', async (req, res) => {


	const { error } = registerValidation(req.body);

	if(error){
		return res.send(error.details[0].message)
	}

	const emailExists = await User.findOne({email: req.body.email });
	if(emailExists){
		return res.send('Email jest już zajęty');
	}


	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt)



	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword,
	});


	try{
		const savedUser = await user.save()
		res.send(savedUser)
	}
	catch(err){
		res.status(400).send(err)
	}
});




router.post('/login', async (req, res) => {
	const { error } = loginValidation(req.body);

	if(error){
		return res.send(error.details[0].message)
	}

	const user = await User.findOne({email: req.body.email });
	if(!user){
		return res.send('Podany email jest błędny');
	}

	const validPass = await bcrypt.compare(req.body.password, user.password);

	if(!validPass){
		return res.send('Hasło jest nieprawidłowe')
	}


	res.send('Zostałeś zalogowany')

})

module.exports = router;


