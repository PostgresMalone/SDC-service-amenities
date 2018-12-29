var expect = require('chai').expect;
var mongoose = require('mongoose');
var request = require('request');
var httpMocks = require('node-mocks-http');
var Promise = require('bluebird');

var app = require('../server/server.js');
var db = require('../database/db.js');
var port = 4420;

describe('API calls', () => {
  it('Should get data depending on room ID from the database', done => {
    var options = {
      'method': 'GET',
      'uri': 'http://127.0.0.1:4421/10'
    };

    request(options, (err, res, body) => {
      console.log(res);
      done();
    });
  });
  it('Should have the same properties as data stored in the database', done => {
    var options = {
      'method': 'GET',
      'uri': 'http://127.0.0.1:4421/10'
    };

    request(options, (err,res,body) => {
    	console.log(body);
    	done();
    });
  });
});

