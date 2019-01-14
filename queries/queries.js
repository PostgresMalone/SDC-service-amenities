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

const getAmenities = async (roomId) => {
  const { pool, endConnection } = startConnectionToDB();
  const { rows } = await pool.query(`SELECT * FROM rooms WHERE id = ${roomId}`);
  endConnection();
  return rows[0];
};

const postAmenities = async (amenities) => {
  const { pool, endConnection } = startConnectionToDB();
  const columns = Object.keys(amenities).join(', ');
  const values = Object.values(amenities).join(', ');
  const { rows } = await pool.query(`select count(*) from rooms`);
  const nextId = Number(rows[0].count) + 1;
  await pool.query(`INSERT INTO rooms (${columns}, id) VALUES (${values}, ${nextId})`);
  endConnection();
};

const updateAmenities = async (roomId, amenities) => {
  const { pool, endConnection } = startConnectionToDB();
  const keyValuePairs = [];
  for (let amenity in amenities) {
    keyValuePairs.push(`${amenity} = ${amenities[amenity]}`);
  }
  await pool.query(`UPDATE rooms SET ${keyValuePairs.join(', ')} WHERE id = ${roomId}`);
  endConnection();
};

const deleteAmenities = async (roomId) => {
  const { pool, endConnection } = startConnectionToDB();
  await pool.query(`DELETE FROM rooms WHERE id = ${roomId}`);
  endConnection();
};

module.exports = {
  getAmenities,
  postAmenities,
  updateAmenities,
  deleteAmenities
};
