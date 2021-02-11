import mongoose  from '../db/connection'

const SurveySchema = new mongoose.Schema({
	vaccination: { type: String, required: true },
	vaccineType: { type: String, required: true },
	doseSchedule: { type: String, required: true },
	vaccineReminder: { type: String, required: true },
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
});

const Survey = mongoose.model('Survey', SurveySchema);

export default Survey
