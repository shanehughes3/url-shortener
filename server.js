var express = require("express"),
    app = express(),
    db = require("./db.js"),
    tests = require("./tests.js"),
    config = require("./config");

app.get("/new/*", function(req, res) {
    var inputURL = tests.trimCreateRequest(req.url);
    var output = {
	input: inputURL
    };
    res.writeHead(200, {"Content-Type": "application/json"});
    if(tests.isValidCreateRequest(req.url)) {
	db.create(inputURL, function(err, newID) {
	    if (err) {
		console.log(err);
	    } else {
		output.short_url = config.serverURL + newID;
		res.end(JSON.stringify(output));
	    }
	});
    } else {
	output.error = "Invalid input";
	res.end(JSON.stringify(output));
    }
});

app.get("/*", function(req, res) {
    var IDreq = tests.trimRetrieveRequest(req.url);
    db.retrieve(IDreq, function(err, outputURL) {
	if (err) {
	    console.log(err);
	} else {
	    if (outputURL) {
		res.writeHead(302, {"Location": outputURL});
		res.end();
	    } else {
		var output = {
		    input: IDreq,
		    error: "URL not found"
		};
		res.end(JSON.stringify(output));
	    }
	}
    });
});

app.listen(process.env.PORT || 80);
