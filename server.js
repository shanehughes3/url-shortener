var express = require("express"),
    app = express(),
    db = require("./db.js"),
    tests = require("./tests.js"),
    config = require("./config");

app.get("/new/*", function(req, res) {
    var inputURL = req.url.slice(5) // trim "/new/"
    var output = {
	input: inputURL
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    if(tests.isValidCreateRequest(req.url)) {
	// output.short_url = "works";
	db.create(inputURL, function(err, newID) {
	    if (err) {
		console.log(err);
	    } else {
		output.short_url = config.serverURL + newID;
		res.end(JSON.stringify(output));
	    }
	});
//	res.end(JSON.stringify(output));
    } else {
	output.error = "Invalid input";
	res.end(JSON.stringify(output));
    }
});

app.listen(80);
