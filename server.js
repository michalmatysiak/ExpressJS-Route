var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
	console.log('Otrzymanie żądania GET');
	fs.readFile('./test.json', 'utf-8', function(err, data) {
		if (err) throw err;
		stringifyFile = data;
		res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	fs.readFile('./test.json', 'utf-8', function(err, data) {
		if (err) throw err;

		var jsonObject = JSON.parse(data);
		jsonObject.notes.push(req.params.note);
		var json = JSON.stringify(jsonObject);
		fs.writeFile('./test.json', json, function(err) {
			res.send(jsonObject);
		})
		
	});
	// console.log('Otrzymanie żądania POST');
	// stringifyFile = req.params.note;
	// fs.writeFile('./test.json', stringifyFile, function(err) {
	// 	console.log('file updated');
	// 	res.send(stringifyFile);
	// });
});

var server = app.listen(3000, function() {
	console.log('Aplikacja nasłuchuje http://localhost:3000');
});



