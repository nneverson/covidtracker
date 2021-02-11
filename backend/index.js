const express = require('express');
const app = express();
import cors from 'cors';
import  UsersController from './controllers/Users.js';
import SurveyController from './controllers/Survey.js';
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


app.use('/api/users', UsersController);
app.use('/api/', SurveyController);

/* END CONTROLLERS HERE */
app.get('/test', (req, res) => {
	res.send('server is working');
});

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
