const cassandra = require('cassandra-driver');
const client = new cassandra.Client({ contactPoints: ['localhost'], localDataCenter: 'datacenter1', keyspace: 'roomsamenities' });

const copyQuery = 'COPY "Rooms" FROM \'./data/rooms1.csv\' WITH DELIMITER=\',\' AND HEADER = TRUE';
client.connect(function (err) {
  if (err) {
    return console.error(err); 
  }
  console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
  client.execute('SELECT * FROM "Rooms" WHERE id = 1', [], { prepare: true })
    .then((result) => {
      console.log('data saved');
      console.log(result.rows);
      client.shutdown();
    })
    .catch(err => {
      console.log('error', err);
      client.shutdown();
    });
  
});
