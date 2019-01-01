const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Partials = require('express-partials');
const Promise = require('bluebird');
const fs = require('fs');
const db = require('../database/db.js');
const pug = require('pug');
let app = Express();
const port = 4420;

app.use(Express.static(__dirname + '/../public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));


// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/../public/index.html');
// });

app.get('/:Id', (req, res) => {
	console.log(req);
	res.sendFile(Path.resolve(__dirname + '/../public/index.html'))
})

app.get('/:Id/amenities/', (req, res) => {
  var data = {};
  db.getURLS().then((results) => {
    data.URLs = results;
    db.getOne(req.params.Id).then((results) => {
      data.room = results;
      res.json(data);
    });
  });
});

app.listen(port, () => console.log('server is listening at port:' + port));

module.exports.app = app;