const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true, dropDups: true },
	password: { type: String, required: true },
	isEmployer: { type: Boolean, required: true, default: false},
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
