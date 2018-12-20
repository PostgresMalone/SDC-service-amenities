const fs = require('fs');
const Promise = require('bluebird');

var readData = () => {
	return new Promise((resolve, reject) => {
		fs.readFile('data.txt', 'utf8', (err, results) => {
			if (err) {
				reject(err);
			} else {
				resolve(JSON.parse(results));
			}
		})	
	})
}

module.exports.readData = readData;