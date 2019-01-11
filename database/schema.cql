-- CREATE KEYSPACE ROOMSAMENITIES WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor': '1'};
USE ROOMSAMENITIES;
DROP TABLE IF EXISTS "Rooms";

CREATE TABLE "Rooms" (
  ID int,
  roomname text,
  selfCheckIn boolean,
  pool boolean,
  kitchen boolean,
  washer boolean,
  dryer boolean,
  dishWasher boolean,
  indoorFireplace boolean,
  petsAllowed boolean,
  heating boolean,
  airConditioning boolean,
  wifi boolean,
  TV boolean,
  bathroomEssentials boolean,
  bedroomComforts boolean,
  coffeeMaker boolean,
  hairDryer boolean,
  iron boolean,
  carbonMonoxideDetector boolean,
  smokeDetector boolean,
  PRIMARY KEY (ID)
);

