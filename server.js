/**
 * Created by vlad.kosarev on 11/24/2014.
 */
var Engine = require('tingodb')(),
    assert = require('assert'),
    express = require('express');

var app = express();

var db = new Engine.Db('', {});

// get all data for particular sensor
app.get('/readSensorData', function (req, res) {
    var sensor = req.query['sensor'];
    var collection = db.collection(sensor);
    var sensorData = {sensor: sensor, datapoint: []};
    if (collection) {
        // get all data points for a particular sensor
        collection.find().toArray(function (err, data) {
            assert.equal(null, err);
            data.forEach(function (reading) {
                sensorData.datapoint.push(reading);
            });
            res.send(JSON.stringify(sensorData));
        });
    } else {
        res.send();
    }
});

// write one data point for particular sensor
app.get('/writeSensorData', function (req, res) {
    var sensor = req.query['sensor'];
    var value = req.query['value'];
    var collection = db.collection(sensor);
    var timestamp = new Date();
    // add new data point to database and return
    collection.insert({timestamp: timestamp, value: value}, value,
        function (err, result) {
            assert.equal(null, err);
            res.send(JSON.stringify(result));
        });
});

app.listen(3000);