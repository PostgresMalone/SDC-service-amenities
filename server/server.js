const Express = require('express');
const BodyParser = require('body-parser');
const Path = require('path');
const Partials = require('express-partials');
const Promise = require('bluebird');
const db = require('../database/db.js');
let app = Express();
const port = 4420;

app.use(Express.static(__dirname + '/../public'));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/:Id', (req, res) => {
  var data = {};
  db.getURLS().then((results) => {
    data.URLs = results;
    db.getOne(req.params.Id).then((results) => {
      data.room = results;
      res.end(JSON.stringify(data));
    });
  });
});

app.listen(port, () => console.log('server is listening at port:' + port));