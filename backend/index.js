const express = require('express');
const cors = require('cors');
const  UsersController = require('./controllers/Users.js')
const SurveyController = require ('./controllers/Survey.js')
const dotenv = require('dotenv');


const app = express();
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
app.use('/api', SurveyController);

/* END CONTROLLERS HERE */
app.get('/test', (req, res) => {
	res.send('server is working');
});

app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});
