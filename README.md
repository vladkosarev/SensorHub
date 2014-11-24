SensorHub
=========

Demo of simple sensor reading/writing

Install node js (http://nodejs.org/)

Clone this repository to some folder

Open command terminal and go to the folder where you cloned this repository to

Execute npm install

Execute node server.js


At this point you have a web server running on port 3000 that can read and write to a simple file database


To write to a sensor - http://localhost:3000/writeSensorData?sensor=[sensorName]&value=[readingValue]
For example - http://localhost:3000/writeSensorData?sensor=light&value=7


To read sensor data - http://localhost:3000/readSensorData?sensor=[sensorName]
For example http://localhost:3000/readSensorData?sensor=light
