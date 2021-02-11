import express from 'express';
import Survey from '../models/survey';
const router = express.Router();

import { getToken, verifyEmployer, verifyUser } from '../middleware/auth';

// add survey created by employee;

router.post('/survey', verifyUser, async (req, res) => {
	try {
		const survey = await Survey.create(req.body);
		if (survey) {
			res.status(200).send({ msg: 'success!!', survey });
		} else {
			res.send({ msg: 'unable to post' });
		}
	} catch (err) {
		console.log(err);
	}
});

//view survey results
router.get('/surveys', verifyUser, verifyEmployer, async (req, res, next) => {
	try {
		Survey.find({})
			.populate('user')
			.exec((err, docs) => {
				if (err) {
					res.send(err);
				} else {
					res.send(docs);
				}
			});
	} catch (err) {
		console.log(Error);
	}
});

export default router;
