const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.connect('mongodb://localhost/amenities', {useNewUrlParser: true});
var db = mongoose.connection;

let amenSchema = mongoose.Schema({
  id: {
    type: Number,
    min: 1,
    max: 100,
    unique: true
  },
  amenities: Object,
});

let amenURL = mongoose.Schema({
  id: {
    type: Number,
    min: 1,
    max: 1,
    unique: true
  },
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

let AmenImages = mongoose.model('AmenImages', amenURL);

let initialise = (obj) => {
  return new Promise((resolve, reject) => {
    AmenImages.create(obj, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

let getURLS = () => {
  return new Promise((resolve, reject) => {
    AmenImages.find({}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

let Amenities = mongoose.model('Amenities', amenSchema);

let insert = (obj) => {
  return new Promise((resolve, reject) => {
    Amenities.create(obj, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

let getOne = (id) => {
  return new Promise((resolve, reject) => {
    Amenities.find({id: id}, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

db.once('open', () => {
  console.log('connected to mongoDB amenities');
});


module.exports.getOne = getOne;
module.exports.insert = insert;
module.exports.getURLS = getURLS;
module.exports.Amenities = Amenities;
module.exports.AmenImages = AmenImages;
module.exports.initialise = initialise;