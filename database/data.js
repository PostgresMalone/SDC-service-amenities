const fs = require('fs');
const Promise = require('bluebird');
const Path = require ('path');
const db = require('./db.js');

var readData = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(Path.resolve(__dirname, '.\\data.txt'), 'utf8', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(results));
      }
    });	
  });
};

module.exports.readData = readData;