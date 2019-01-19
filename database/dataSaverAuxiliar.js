const { Pool } = require('pg');
const { user, host, database, password} = require('../queries/config.js');

const pool = new Pool({
  user,
  host,
  database,
  password
});

pool.on('error', (err) => {
  console.log('Error', err);
});

const amenities = {
  'Air conditioning': 'https://s3-us-west-1.amazonaws.com/images-amenities/air-conditioning.png',
  'Bathroom essentials': 'https://s3-us-west-1.amazonaws.com/images-amenities/essentials.png',
  'Bedroom comforts': 'https://s3-us-west-1.amazonaws.com/images-amenities/extra-pillows-blankets.png',
  'Carbon monoxide detector': 'https://s3-us-west-1.amazonaws.com/images-amenities/co2-detector.png',
  'Coffee maker': 'https://s3-us-west-1.amazonaws.com/images-amenities/coffee-maker.png',
  'Dish washer': 'https://s3-us-west-1.amazonaws.com/images-amenities/dishwasher.png',
  'Dryer': 'https://s3-us-west-1.amazonaws.com/images-amenities/dryer.png',
  'Hair dryer': 'https://s3-us-west-1.amazonaws.com/images-amenities/hair-dryer.png',
  'Heating': 'https://s3-us-west-1.amazonaws.com/images-amenities/heating.png',
  'Indoor fireplace': 'https://s3-us-west-1.amazonaws.com/images-amenities/indoor-fireplace.png',
  'Iron': 'https://s3-us-west-1.amazonaws.com/images-amenities/iron.png',
  'Kitchen': 'https://s3-us-west-1.amazonaws.com/images-amenities/kitchen.png',
  'Pets allowed': 'https://s3-us-west-1.amazonaws.com/images-amenities/pets-allowed.png',
  'Pool': 'https://s3-us-west-1.amazonaws.com/images-amenities/pool.png',
  'Self check-in': 'https://s3-us-west-1.amazonaws.com/images-amenities/self-check-in.png',
  'Smoke detector': 'https://s3-us-west-1.amazonaws.com/images-amenities/smoke-detector.png',
  'TV': 'https://s3-us-west-1.amazonaws.com/images-amenities/tv.png',
  'Washer': 'https://s3-us-west-1.amazonaws.com/images-amenities/washer.png',
  'Wifi': 'https://s3-us-west-1.amazonaws.com/images-amenities/wireless-internet.png'
};

const saveData = async () => {
  for (let amenity in amenities) {
    await pool.query(`INSERT INTO Amenities (amenityname, url, isSpecial) VALUES ('${amenity}', '${amenities[amenity]}', ${!Math.round(Math.random())})`);
  }

  pool.end();
};

saveData();


