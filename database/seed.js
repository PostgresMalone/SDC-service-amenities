const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('./data.js');
const db = require('./db.js');

var amenURLs = {
  id: 1,
  'Self check-in': 'https://s3-us-west-1.amazonaws.com/images-amenities/self-check-in.png',
  'Pool': 'https://s3-us-west-1.amazonaws.com/images-amenities/pool.png',
  'Kitchen': 'https://s3-us-west-1.amazonaws.com/images-amenities/kitchen.png', 
  'Washer': 'https://s3-us-west-1.amazonaws.com/images-amenities/washer.png',
  'Dryer': 'https://s3-us-west-1.amazonaws.com/images-amenities/dryer.png',
  'Dishwasher': 'https://s3-us-west-1.amazonaws.com/images-amenities/dishwasher.png',
  'Indoor fireplace': 'https://s3-us-west-1.amazonaws.com/images-amenities/indoor-fireplace.png',
  'Pets allowed': 'https://s3-us-west-1.amazonaws.com/images-amenities/pets-alowed.png',
  'Heating': 'https://s3-us-west-1.amazonaws.com/images-amenities/heating.png',
  'Air conditioning': 'https://s3-us-west-1.amazonaws.com/images-amenities/air-conditioning.png',
  'Wifi': 'https://s3-us-west-1.amazonaws.com/images-amenities/wireless-internet.png',
  'TV': 'https://s3-us-west-1.amazonaws.com/images-amenities/tv.png',
  'Bathroom essentials': 'https://s3-us-west-1.amazonaws.com/images-amenities/essentials.png',
  'Bedroom comforts': 'https://s3-us-west-1.amazonaws.com/images-amenities/extra-pillows-blankets.png',
  'Coffee maker': 'https://s3-us-west-1.amazonaws.com/images-amenities/coffee-maker.png',
  'Hair dryer': 'https://s3-us-west-1.amazonaws.com/images-amenities/hair-dryer.png',
  'Iron': 'https://s3-us-west-1.amazonaws.com/images-amenities/iron.png',
  'Carbon monoxide detector': 'https://s3-us-west-1.amazonaws.com/images-amenities/co2-detector.png',
  'Smoke detector': 'https://s3-us-west-1.amazonaws.com/images-amenities/smoke-detector.png',
  'Parking': '',
};
var dataEntries = [];

db.AmenImages.deleteMany({}).then(() => {
  db.initialise(amenURLs).then((err, results) => {
    if (err) {
      console.log(err); 
    }
  });
});
db.Amenities.deleteMany({}).then(() => {
  console.log('previous Amenities entries deleted');
  data.readData().then(results => {
    for (key in results) {
      dataEntries.push(db.insert(results[key]));
    }
    Promise.all(dataEntries).then((err, results) => {
      if (err) {
        console.log(err);
      }
      mongoose.connection.close();
    });
  });
});
