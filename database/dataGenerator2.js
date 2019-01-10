const faker = require('faker');
const fs = require('fs');

const specialAmenities = ['selfCheckIn', 'pool','kitchen','washer','dryer','dishwasher','indoorFireplace','petsAllowed','heating','airConditioning'];
const essentialAmenities = ['wifi', 'TV', 'bathroomEssentials', 'bedroomComforts', 'coffeeMaker', 'hairDryer', 'iron', 'carbonMonoxideDetector', 'smokeDetector'];

const columns = 'roomname,' + specialAmenities.join() + ',' + essentialAmenities.join() + '\n';
const before = Date.now();

for (let j = 501; j <= 1000; j++) {
  const roomsFile = fs.createWriteStream(`./data/rooms${j}.csv`);
  roomsFile.write(columns);

  for (let i = 1; i <= 10000; i++) {
    const id = (j - 1) * 10000 + i;
    let roomString = id + ',' + faker.lorem.word() + id;
    
    for (let j = 0; j < specialAmenities.length; j++) {
      roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
    }
  
    for (let k = 0; k < essentialAmenities.length; k++) {
      roomString = roomString + ',' + !!Math.floor(Math.random() * 2);
    }
    
    roomsFile.write(roomString + '\n');
  }

  roomsFile.end();
}

console.log('time taken: ', (Date.now() - before) / 60000);
