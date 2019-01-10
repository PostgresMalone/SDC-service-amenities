const faker = require('faker');
const fs = require('fs');

const specialAmenities = ['selfCheckIn', 'pool','kitchen','washer','dryer','dishwasher','indoorFireplace','petsAllowed','heating','airConditioning'];
const essentialAmenities = ['wifi', 'TV', 'bathroomEssentials', 'bedroomComforts', 'coffeeMaker', 'hairDryer', 'iron', 'carbonMonoxideDetector', 'smokeDetector'];

const columns = 'roomname,' + specialAmenities.join() + ',' + essentialAmenities.join() + '\n';
const before = Date.now();

const writeFile = (stream, rowsRecorded, j) => {
  if (rowsRecorded >= 10000) {
    stream.end();
    if (j === 1000) {
      console.log('time taken: ', (Date.now() - before) / 60000);
    }
    return;
  }

  const id = (j - 1) * 10000 + rowsRecorded + 1;
  let roomString = id + ',' + faker.lorem.word() + id;
  
  for (let j = 0; j < specialAmenities.length; j++) {
    roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
  }

  for (let k = 0; k < essentialAmenities.length; k++) {
    roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
  }

  const shouldContinue = stream.write(roomString + '\n');
  if (shouldContinue) {
    writeFile(stream, rowsRecorded + 1, j);
  } else {
    stream.once('drain', () => {
      writeFile(stream, rowsRecorded + 1, j);
    });
  }
};

for (let j = 1; j <= 1000; j++) {
  const roomsFile = fs.createWriteStream(`./data/rooms${j}.csv`);
  roomsFile.write(columns);
  writeFile(roomsFile, 0, j);
}
