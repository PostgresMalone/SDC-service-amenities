const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('./data.js');
mongoose.connect('mongodb://localhost/amenities');
var db = mongoose.connection;

let amenSchema = mongoose.schema({
	id:{
		type:Number,
		min:1,
		max:100,
		unique: true
	},
	amenities: Object
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
	data.readData.then((sampleData) => {
		for (var i = 0; i < sampleData; i++) {
			dataSet.push(insert(sampleData[i]));
		}
	});

	Promise.all(dataSet).then((err, results) => {
		if(err) {
			console.error(err);
		} else {
			console.log('database has been updated! ', results);
		}
	})
});


module.exports.getOne = getOne;