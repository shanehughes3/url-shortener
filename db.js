var config = require("./config"),
    ObjectId = require("mongodb").ObjectId,
    mongoose = require("mongoose"),
    db = mongoose.connect(config.db),
    Schema = mongoose.Schema;

var URLSchema = new Schema({
    url: String
});

var Entry = mongoose.model("Entry", URLSchema);

exports.create = function(newURL, cb) {
    var newEntry = new Entry({url: newURL});
    newEntry.save(function(err) {
	if (err) {
	    cb(err);
	} else {
	    cb(null, newEntry._id);
	}
    });
}

exports.retrieve = function(reqKey, cb) {
    var reqID;
    try {
	reqID = new ObjectId(reqKey);
    } catch (e) {
	console.log(e);
	cb(null, null);
    }
    Entry.findOne({
	_id: reqKey
    }, "url", function(err, output) {
	if (err) {
	    cb(err);
	} else {
	    cb(null, output.url);
	}
    });
}
