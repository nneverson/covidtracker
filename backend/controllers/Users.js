const express = require('express');
const User = require('../models/user');
const router = express.Router();
import {getToken, verifyEmployer, verifyUser} from '../middleware/auth'


//POST /api/signup
router.post('/signup',  async (req, res) => {

	try{
		const user = await User.create(req.body)
      if(user){
		 res.send({
			 _id: user._id,
			 name: user.name,
			 email: user.email,
			 token: getToken(user),
			 msg: "registration successful",
			 isEmployer: user.isEmployer
		 }) 
	  }else{
		  res.status(401).send({msg: "invalid email or password"})
	  }
	}catch(err){
        console.log(err)
	}
	
});

//show all users (employees) 
router.get('/', verifyUser, verifyEmployer, (req, res, next) => {
	User.find({})
		.then((users) => {
			res.json(users);
		})
		.catch(err => res.send(err));
});


//Sign In
router.post('/login', async (req, res) => {
	try{
 const regUser = await User.findOne({
	 email: req.body.email,
	 password: req.body.password
 })
 if (regUser) {
		res.send({
			_id: regUser._id,
			password: regUser.password,
			email: regUser.email,
			token: getToken(regUser),
			msg: 'login successful!!',
			isEmployer: regUser.isEmployer
		});
 } else {
		res.status(401).send({ msg: 'invalid email or password' });
 }
	}catch(err){
		console.log(err)
	}
});

//Find one user
router.get('/:id', (req, res, next) => {
	User.findById({ _id: req.params.id })
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});

//Patch ( edit a user)
router.patch('/:id', (req, res, next) => {
	User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});
// Delete a user
router.delete('/:id', verifyUser, (req, res, next) => {
	User.findByIdAndDelete({ _id: req.params.id })
		.then((user) => {
			res.json(user);
		})
		.catch(next);
});


module.exports = router;
