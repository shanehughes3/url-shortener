var config = require("./config"),
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

exports.retrieve = function(reqKey) {

}
