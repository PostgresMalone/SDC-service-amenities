const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('./data.js');
const db = require('./db.js');

var amenURLs = {
  id: 1,
  'Self check-in': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/self-check-in.png',
  'Pool': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/pool.png',
  'Kitchen': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/kitchen.png', 
  'Washer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/washer.png',
  'Dryer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/dryer.png',
  'Dishwasher': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/dishwasher.png',
  'Indoor fireplace': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/indoor-fireplace.png',
  'Pets allowed': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/pets-allowed.png',
  'Heating': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/heating.png',
  'Air conditioning': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/air-conditioning.png',
  'Wifi': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/wireless-internet.png',
  'TV': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/tv.png',
  'Bathroom essentials': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/essentials.png',
  'Bedroom comforts': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/extra-pillows-blankets.png',
  'Coffee maker': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/coffee-maker.png',
  'Hair dryer': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/hair-dryer.png',
  'Iron': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/iron.png',
  'Carbon monoxide detector': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/co2-detector.png',
  'Smoke detector': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/smoke-detector.png',
  'Parking': 'https://s3-us-west-1.amazonaws.com/barebnbbucket/parking.png',
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
    });
  });
});
