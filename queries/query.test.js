const { Pool } = require('pg');
const cassandra = require('cassandra-driver');
const _ = require('underscore');
const queriesTested = 100;
const totalRows = Math.pow(10, 7);

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

    const { rows } = await pool.query(`SELECT * FROM rooms LIMIT ${queriesTested} OFFSET ${totalRows - queriesTested}`);
    ids = _.pluck(rows, 'id');
  });

  afterEach(() => {
    pool.end();
  });

  test('it should SELECT the queriesTested queries from the last 10% rows of the table', () => {
    expect(ids.length).toBe(queriesTested);
  });

  test('it should execute the queries in less than 50ms each in average', async () => {
    const times = [];

    for (let i = 0; i < ids.length; i++) {
      const before = Date.now();
      await pool.query(`SELECT * FROM rooms WHERE id = ${ids[i]}`);
      const after = Date.now();
      times.push(after - before);
    }

    const averageTime = times.reduce((total, time) => total + time, 0) / times.length;
    expect(averageTime).toBeLessThan(50);
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

    const { rows } = await pool.query(`SELECT * FROM rooms LIMIT ${queriesTested} OFFSET ${totalRows - queriesTested}`);
    roomnames = _.pluck(rows, 'roomname');
  });

  afterEach(() => {
    pool.end();
  });

  test('it should SELECT the queriesTested queries from the last 10% rows of the table', () => {
    expect(roomnames.length).toBe(queriesTested);
  });

  test('it should execute the queries in less than 50ms each in average', async () => {
    const times = [];
    
    for (let i = 0; i < roomnames.length; i++) {
      const before = Date.now();
      await pool.query(`SELECT * FROM rooms WHERE roomname = '${roomnames[i]}'`);
      const after = Date.now();
      times.push(after - before);
    }
    
    const averageTime = times.reduce((total, time) => total + time, 0) / times.length;
    expect(averageTime).toBeLessThan(50);
  });
});

//====================================================================================

describe('SELECT by id query for Cassandra', () => {
  let client;

  beforeEach(async () => {
    client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'roomsamenities' });

    await client.connect();
  });

  afterEach(() => {
    client.shutdown();
  });

  test('it should execute the queries in less than 50ms each in average', async () => {
    const times = [];

    for (let i = 0; i < queriesTested; i++) {
      const before = Date.now();
      await client.execute(`SELECT * FROM "Rooms" WHERE id = ${totalRows - i}`, [], { prepare: true });
      const after = Date.now();
      times.push(after - before);
    }

    const averageTime = times.reduce((total, time) => total + time, 0) / times.length;
    expect(averageTime).toBeLessThan(50);
  });
});

describe('SELECT by roomname query for Cassandra', () => {
  let roomnames;
  let client;

  beforeEach(async () => {
    client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'roomsamenities' });

    await client.connect();
    const { rows } = await client.execute(`SELECT * FROM "Rooms" WHERE id > ${totalRows - queriesTested}  ALLOW FILTERING`);
    roomnames = _.pluck(rows, 'roomname');
  });

  afterEach(() => {
    client.shutdown();
  });

  test('it should execute the queries in less than 50ms each in average', async () => {
    const times = [];

    for (let i = 0; i < roomnames.length; i++) {
      const before = Date.now();
      await client.execute(`SELECT * FROM "Rooms" WHERE roomname = '${roomnames[i]}'`, [], { prepare: true });
      const after = Date.now();
      times.push(after - before);
    }

    const averageTime = times.reduce((total, time) => total + time, 0) / times.length;
    expect(averageTime).toBeLessThan(50);
  });
});

