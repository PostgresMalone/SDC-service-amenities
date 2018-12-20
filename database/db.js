const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('./data.js');
mongoose.connect('mongodb://localhost/amenities');
var db = mongoose.connection;

let amenSchema = mongoose.Schema({
	id:{
		type:Number,
		min:1,
		max:100,
		unique: true
	},
	amenities: Object,
});

let Amenities = mongoose.model('Amenities', amenSchema);
let insert = (obj) => {
	return new Promise((resolve, reject) => {
		Amenities.create(obj, (err, results) => {
			if(err) {
				reject(err);
			} else {
				resolve(results);
			}
		})
	})
}

let getOne = (id) => {
	return new Promise((resolve, reject) => {
		Amenities.find({id: id}, (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(results);
			}
		})
	})
}

db.once('open', () => {
	console.log('connected to mongoDB amenities');
	Amenities.deleteMany({}).then(() => {
		console.log('previous Amenities entries deleted');
		data.readData().then(results => {
			for(key in results){
				insert(results[key]).then((err, results) => {
					if (err) {
						return;
					} else {
						console.log(results[key]);
					}
				});
			}
		});
	})
});


module.exports.getOne = getOne;
module.exports.insert = insert;