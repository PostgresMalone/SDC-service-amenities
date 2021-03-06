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

const saveData = () => {
  for (let i = 1; i <= 10; i++) {
    const file = `/Users/lucasparreiradefariaborges/SDC-service-amenities/data/rooms${i}.csv`;
    pool.query(`COPY Rooms FROM \'${file}\' WITH (FORMAT csv, HEADER true)`, (err, res) => {
      if (err) {
        console.log('error!');
      }
    });
  }
};

saveData();

pool.end();
