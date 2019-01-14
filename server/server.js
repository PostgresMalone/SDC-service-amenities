const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Partials = require('express-partials');
const Promise = require('bluebird');
// const db = require('../database/db.js');
let app = Express();
const port = 4420;

// import query functions
const {
  getAmenities,
  postAmenities,
  updateAmenities,
  deleteRoom
} = require('../queries/queries.js');

app.use(Express.static(__dirname + '/../public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(Path.resolve(__dirname + '/../public/index.html'));
});

app.get('/:Id', (req, res) => {
  res.sendFile(Path.resolve(__dirname + '/../public/index.html'));
});

app.get('/:Id/amenities/', (req, res) => {
  var Id;
  if (Number(req.params.Id) > 100 || Number(req.params.Id) < 1 || !Number(req.params.Id)) {
    Id = 1;
  } else {
    Id = req.params.Id;
  }
  var data = {};
  db.getURLS().then((urls) => {
    data.URLs = urls[0];
    db.getOne(Id).then((presence) => {
      data.special = presence[0].amenities.special;
      data.essential = presence[0].amenities.essential;
      res.json(data);
    });
  });
});

app.get('//amenities/', (req, res) => {
  var data = {};
  db.getURLS().then((urls) => {
    data.URLs = urls[0];
    db.getOne(1).then((presence) => {
      data.special = presence[0].amenities.special;
      data.essential = presence[0].amenities.essential;
      res.json(data);
    });
  });
});

// get amenities for one room
app.get('/rooms/:roomId', (req, res) => {
  const { roomId } = req.params;
  getAmenities(roomId, res);
});

// {
//   "airconditioning": true,
//   "bathroomessentials": true,
//   "bedroomcomforts": true,
//   "carbonmonoxidedetector": true,
//   "coffeemaker": true,
//   "dishwasher": true,
//   "dryer": true,
//   "hairdryer": true,
//   "heating": true,
//   "indoorfireplace": true,
//   "iron": true,
//   "kitchen": true,
//   "petsallowed": true,
//   "pool": true,
//   "roomname": "roomUpdated",
//   "selfcheckin": true,
//   "smokedetector": true,
//   "tv": true,
//   "washer": true,
//   "wifi": true
// }


// create a new room row in the table
app.post('/rooms', (req, res) => {
  const { amenities } = req.body;
  // console.log('amenities', req.body);
  postAmenities(amenities, res);
});

// update the amenities of one room
app.patch('/rooms/:roomId', (req, res) => {
  const { roomId } = req.params;
  const { amenities } = req.body;
  updateAmenities(roomId, amenities, res);
});

// delete a new room row in the table
app.delete('/rooms/:roomId', (req, res) => {
  const { roomId } = req.params;
  deleteRoom(roomId, res);
});

app.listen(port, () => console.log('server is listening at port:' + port));

module.exports.app = app;