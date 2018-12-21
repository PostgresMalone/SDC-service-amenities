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

let amenURL = mongoose.Schema({
	'Self check-in': String,
	'Pool': String,
	'Kitchen': String,
	'Washer': String,
	'Dryer': String,
	'Dishwasher': String,
	'Indoor fireplace': String,
	'Pets allowed': String,
	'Heating': String,
	'Air conditioning': String,
	'Wifi': String,
	'TV': String,
	'Bathroom essentials': String,
	'Bedroom comforts': String,
	'Coffee maker': String,
	'Hair dryer': String,
	'Iron': String,
	'Carbon monoxide detector': String,
	'Smoke detector': String
});

var amenURLs = {
	'Self check-in': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/self-check-in.png',
	'Pool': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/pool.png',
	'Kitchen': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/kitchen.png', 
	'Washer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/tv.png',
	'Dryer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/dryer.png',
	'Dishwasher': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/dishwasher.png',
	'Indoor fireplace': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/indoor-fireplace.png',
	'Pets allowed': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/pets-allowed.png',
	'Heating': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/heating.png',
	'Air conditioning': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/air-conditioning.png',
	'Wifi': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/washer.png',
	'TV': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/tv.png',
	'Bathroom essentials': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/essentials.png',
	'Bedroom comforts': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/extra-pillows-blankets.png',
	'Coffee maker': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/coffee-maker.png',
	'Hair dryer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/hair-dryer.png',
	'Iron': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/iron.png',
	'Carbon monoxide detector': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/co2-detector.png',
	'Smoke detector': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/smoke-detector.png',
	'Parking': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/kitchen.png',
};
let AmenImages = mongoose.model('AmenImages', amenURL);

let initialise = (obj) => {
	return new Promise((resolve, reject) => {
		AmenImages.create(obj, (err, results) => {
			if(err) {
				reject(err);
			} else {
				resolve(results);
			}
		})
	})
}

let getURLS = () => {
	return new Promise((resolve, reject) => {
		AmenImages.find({}, (err, results) => {
			if(err) {
				reject(err);
			} else {
				resolve(results);
			}
		})
	})
}

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
	AmenImages.deleteMany({}).then(() => {
		initialise(amenURLs).then((err, results) => {
			if(err) {
				console.log(err)	
			} else {
				console.log(results);
			}
		})
	})
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
module.exports.getURLS = getURLS;