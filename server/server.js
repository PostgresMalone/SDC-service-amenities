require('newrelic');
require('babel-polyfill');
const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Partials = require('express-partials');
const Promise = require('bluebird');
const React = require('react');
const { renderToString } = require('react-dom/server');
import Amenities from '../client/components/amenities.jsx';
const fs = require('fs');
const path = require('path');
// const db = require('../database/db.js');

let app = Express();
const port = 4420;

// import query functions
const {
  getAmenities,
  getPicturesAmenities,
  postAmenities,
  updateAmenities,
  deleteRoom
} = require('../queries/queries.js');

// app.use(Express.static(__dirname + '/../public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  const reactDOM = renderToString(<Amenities />);
  res.end(htmlTemplate(reactDOM));
});

app.get('/bundle.js', (req, res) => {
  res.sendFile('/otherfile.js');
  // res.sendFile(Path.resolve(__dirname + '/../public/index.html'));
});

app.get('/:Id', (req, res) => {
  res.sendFile(Path.resolve(__dirname + '/../public/index.html'));
});

app.get('/:Id/amenities/', async (req, res) => {
  const { Id } = req.params;
  const data = {};
  await getPicturesAmenities(data);
  getAmenities(Id, res, data);
});

app.get('//amenities/', async (req, res) => {
  let data = {};
  await getPicturesAmenities(data);
  getAmenities(2, res, data);
});

// get amenities for one room
app.get('/rooms/:roomId', (req, res) => {
  const { roomId } = req.params;
  getAmenities(roomId, res, {});
});

// create a new room row in the table
app.post('/rooms', (req, res) => {
  const amenities = req.body;
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

const htmlTemplate = (reactDOM) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
    </head>
    <body>
      <div id="Amenities">${reactDOM}</div>
      <script type="text/javascript" src="https://s3-us-west-2.amazonaws.com/sdc-amenities-service-bundle/bundle.js"></script>
    </body>
  </html>
      `;
    };
    
    // module.exports.app = app;
