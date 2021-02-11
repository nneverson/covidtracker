const express = require('express');
const app = express();
const cors = require('cors');
import dotenv from 'dotenv'

dotenv.config()

app.use(cors());
app.use(express.json());
app.use(
	express.urlencoded({
		extended: true,
	})
);

/* START CONTROLLERS HERE */
// const ProfileControler = require('./controllers/profiles');
// app.use('/api/profiles', ProfileController);

const UsersController = require('./controllers/Users');
app.use('/api/users', UsersController);

/* END CONTROLLERS HERE */
app.get('/test', (req, res) => {
	res.send('server is working');
});

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
