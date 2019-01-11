USE ROOMSAMENITIES;
-- select * from "Rooms";
COPY "Rooms" FROM './data/rooms10.csv' WITH DELIMITER=',' AND HEADER=TRUE;
