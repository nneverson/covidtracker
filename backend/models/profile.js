// const mongoose = require('../db/connection');

// const ListSchema = new mongoose.Schema({
// 	owner: {
// 		required: true,
// 		ref: 'User',
// 		type: mongoose.Schema.Types.ObjectId, // check this
// 	},
//     Position: {
// 		type: String,
// 		// unique: true,
// 		required: true,
// 	},
// 	description: {
// 		type: String,
// 		required: true,
// 	},
// 	imageUrl: String,
	
// 	author: {
// 		type: String,
// 		required: true,
// 	},
// 	games: {
// 		required: true,
// 		type: [
// 			{
// 				id: Number,
// 				name: String,
// 				image: String,
// 			},
// 		],
// 	},
// });

// const List = mongoose.model('List', ListSchema);

// module.exports = List;
