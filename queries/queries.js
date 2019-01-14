const { Pool } = require('pg');

const startConnectionToDB = () => {
  const pool = new Pool({
    user: 'lucasparreiradefariaborges',
    host: 'localhost',
    database: 'ROOMSAMENITIES',
    password: ''
  });
  
  pool.on('error', (err) => {
    console.log('Error', err);
  });

  const result = {};
  result.pool = pool;
  result.endConnection = () => {
    pool.end();
  };

  return result;
};

const getAmenities = async (roomId, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const { rows } = await pool.query(`SELECT * FROM rooms WHERE id = ${roomId}`);
  console.log('rows', rows);
  endConnection();
  if (rows.length === 0) {
    res.status(404);
    res.send('The room searched doesn\'t exist!');
  } else {
    res.send(rows[0]);
  }
};

const postAmenities = async (amenities, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const columns = Object.keys(amenities).join(', ');
  const values = Object.values(amenities).join(', ');

  const { rows } = await pool.query(`SELECT MAX(id) FROM rooms`);
  const nextId = Number(rows[0].max) + 1;
  
  await pool.query(`INSERT INTO rooms (${columns}, id) VALUES (${values}, ${nextId})`)
    .then(() => {
      res.send('Room row created succesfully!');
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.send('You are trying to insert a property which is not available!');
    });

  endConnection();
};

const updateAmenities = async (roomId, amenities, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const keyValuePairs = [];
  for (let amenity in amenities) {
    keyValuePairs.push(`${amenity} = ${amenities[amenity]}`);
  }
  await pool.query(`UPDATE rooms SET ${keyValuePairs.join(', ')} WHERE id = ${roomId}`)
    .then(({ rowCount }) => {
      if (!rowCount) {
        res.status(404);
        res.send('The room you tried to update doesn\'t exist.');
      } else {
        res.send('Room updated succesfully!');
      }
      console.log(rowCount)
    })
    .catch((err) => {
      console.log('ERROR', err);
      res.send('The property you are trying to update doesn\'t exist.');
    });
  
  endConnection();
};

const deleteRoom = async (roomId, res) => {
  const { pool, endConnection } = startConnectionToDB();
  const result = await pool.query(`DELETE FROM rooms WHERE id = ${roomId}`);
  if (!result.rowCount) {
    res.status(404);
    res.send('The room you tried to delete doesn\'t exist!');
  } else {
    res.send('Room deleted succesfully!');
  }
  endConnection();
};

module.exports = {
  getAmenities,
  postAmenities,
  updateAmenities,
  deleteRoom
};
