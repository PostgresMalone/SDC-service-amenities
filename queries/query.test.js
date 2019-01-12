// const { Pool } = require('pg');

// const pool = new Pool({
//   user: 'lucasparreiradefariaborges',
//   host: 'localhost',
//   database: 'ROOMSAMENITIES',
//   password: ''
// });

// pool.on('error', (err) => {
//   console.log('Error', err);
// });

// // describe('sample test', () => {
// //   test('sample select query', async () => {
// //     await pool.query('select * from rooms where id = 1', async (err, res) => {
// //       console.log('i am here!2')
// //       if (err) {
// //         console.log('error!!!');
// //         pool.end();
// //       } else {
// //         console.log(res.rows);
// //         console.log('hello2');
// //         expect(1).toBe(1);
// //         pool.end();
// //       }
// //     });
// //   });
// // });
// // console.time('id=3969240');
// // // const before = Date.now();
// // pool.query('select * from rooms where id = 3969240', (err, res) => {
// //   if (err) {
// //     throw err;
// //   } else {
// //     console.log(res.rows);
// //     console.timeEnd('id=3969240');
// //     // console.log('time taken:', Date.now() - before);
// //   }
// // });

// // console.time('id=occaecati3969239');
// // pool.query('select * from rooms where roomname = \'occaecati3969239\'', (err, res) => {
// //   if (err) {
// //     throw err;
// //   } else {
// //     console.log(res.rows);   
// //     console.timeEnd('id=occaecati3969239');
// //   }
// // });

// pool.end();

const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'roomsamenities' });
	
client.connect(function (err) {
  if (err) {
    return console.error(err); 
  }
  console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
  console.time('id=3969240');
  client.execute('SELECT * FROM "Rooms" WHERE id = 9900000', [], { prepare: true })
    .then((result) => {
      console.log('data saved');
      console.log(result.rows);
      console.timeEnd('id=3969240');
      client.shutdown();
    })
    .catch(err => {
      console.log('error', err);
      client.shutdown();
    });

});

// client.connect(function (err) {
//   if (err) {
//     return console.error(err); 
//   }
//   console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
//   console.time('id=velit3969240');
//   client.execute('SELECT * FROM "Rooms" WHERE roomname = \'vel302602\' ALLOW FILTERING', [], { prepare: true })
//     .then((result) => {
//       console.log('data saved');
//       console.log(result.rows);
//       console.timeEnd('id=velit3969240');
//       client.shutdown();
//     })
//     .catch(err => {
//       console.log('error', err);
//       client.shutdown();
//     });

// });

