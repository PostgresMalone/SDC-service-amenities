// const Sequelize = require('sequelize');

// const db = new Sequelize('ROOMSAMENITIES', 'lucasparreiradefariaborges', '', {
//   dialect: 'postgres',
//   operatorsAliases: false,
//   logging: false,
//   host: 'localhost',
// });

// // uncomment the following lines to check the connection to the postgres DB
// // db
// //   .authenticate()
// //   .then(() => {
// //     console.log('Connection has been established successfully.');
// //   })
// //   .catch(err => {
// //     console.error('Unable to connect to the database:', err);
// //   });

// module.exports = db;

const { Pool, Client } = require('pg');

const pool = new Pool({
  user: 'lucasparreiradefariaborges',
  host: 'localhost',
  database: 'ROOMSAMENITIES',
  password: ''
});

const saveData = (turn) => {
  for (let i = turn; i < 10 + turn; i++) {
    pool.query(`\copy Rooms FROM '/Users/lucasparreiradefariaborges/SDC-service-amenities/data/rooms${i}.csv' WITH (FORMAT csv, HEADER true)`, (err, res) => {
      if (err) {
        console.log('length', arr.length);
        throw err;
      }
    });
  }
};

for (let i = 0; i < 100; i++) {
  saveData(i * 10 + 1);
}

// saveData();

pool.end();
