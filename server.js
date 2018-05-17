var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var app = express();
var stringifyFile;

app.use(bodyParser.json());

app.get("/getNote", function(req, res) {
	fs.readFile("./test.json", "utf8", function(err, data) {
		if (err) throw err;
		stringifyFile = data;
		res.send(stringifyFile);
	});
});

app.post("/updateNote/:note", function(req, res) {
	fs.readFile(".test.json", "utf8", function(err, data) {
		stringifyFile = data + req.params.note;
		res.send(data);
		fs.writeFile("./test.json", stringifyFile, function(err) {
			if (err) throw err;
			console.log("file updated");
			res.send(stringifyFile);
		});
	});
});

var server = app.listen(3000, function() {
	console.log("Przykładowa aplikacja nasłuchuje na http://localhost:3000");
});
