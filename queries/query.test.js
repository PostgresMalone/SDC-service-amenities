const { Pool } = require('pg');
const cassandra = require('cassandra-driver');
const _ = require('underscore');

describe('SELECT by id query for Postgres', () => {
  let ids;
  let pool;

  beforeEach(async () => {
    pool = new Pool({
      user: 'lucasparreiradefariaborges',
      host: 'localhost',
      database: 'ROOMSAMENITIES',
      password: ''
    });
    
    pool.on('error', (err) => {
      console.log('Error', err);
    });

    const { rows } = await pool.query('SELECT * FROM rooms LIMIT 10 OFFSET 9000000');
    ids = _.pluck(rows, 'id');
  });

  afterEach(() => {
    pool.end();
  });

  test('it should SELECT the 10 queries from the end of the table', () => {
    expect(ids.length).toBe(10);
  });

  test('it should execute the queries in less than 50ms each in average', async () => {
    const promisedQueryResults = [];
    const before = Date.now();

    for (let i = 0; i < ids.length; i++) {
      promisedQueryResults.push(pool.query(`SELECT * FROM rooms WHERE id = ${ids[i]}`));
    }

    await Promise.all(promisedQueryResults)
      .then(() => {
        const after = Date.now();
        expect(after - before).toBeLessThan(500);
      });
  });
});

describe('SELECT by roomname query for Postgres', () => {
  let roomnames;
  let pool;

  beforeEach(async () => {
    pool = new Pool({
      user: 'lucasparreiradefariaborges',
      host: 'localhost',
      database: 'ROOMSAMENITIES',
      password: ''
    });
    
    pool.on('error', (err) => {
      console.log('Error', err);
    });

    const { rows } = await pool.query('SELECT * FROM rooms LIMIT 10 OFFSET 9000000');
    roomnames = _.pluck(rows, 'roomname');
  });

  afterEach(() => {
    pool.end();
  });

  test('it should SELECT the 10 queries from the end of the table', () => {
    expect(roomnames.length).toBe(10);
  });

  test('it should execute the queries in less than 50ms each in average', async () => {
    const promisedQueryResults = [];
    const before = Date.now();

    for (let i = 0; i < roomnames.length; i++) {
      promisedQueryResults.push(pool.query(`SELECT * FROM rooms WHERE roomname = '${roomnames[i]}'`));
    }

    await Promise.all(promisedQueryResults)
      .then(() => {
        const after = Date.now();
        expect(after - before).toBeLessThan(500);
      });
  });
});

//====================================================================================

describe('SELECT by id query for Cassandra', () => {
  let ids;
  let client;

  beforeEach(async () => {
    client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'roomsamenities' });

    await client.connect();
    const { rows } = await client.execute('SELECT * FROM "Rooms" WHERE id = 9900000', [], { prepare: true });
    ids = _.pluck(rows, 'id');

  });

  afterEach(() => {
    client.shutdown();
  });

  test('it should SELECT the 10 queries from the end of the table', () => {
    expect(ids.length).toBe(1);
    console.log('length', ids);
  });

  // test('it should execute the queries in less than 50ms each in average', async () => {
  //   const promisedQueryResults = [];
  //   const before = Date.now();

  //   for (let i = 0; i < ids.length; i++) {
  //     promisedQueryResults.push(pool.query(`SELECT * FROM rooms WHERE id = ${ids[i]}`));
  //   }

  //   await Promise.all(promisedQueryResults)
  //     .then(() => {
  //       const after = Date.now();
  //       expect(after - before).toBeLessThan(500);
  //     });
  // });
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

