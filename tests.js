exports.isValidCreateRequest = function(input) {
    return /^\/new\/http[s]?:\/\/.*\.?.+\..+/.test(input);
};

exports.trimCreateRequest = function(input) {
    return input.slice(5); // trim leading "/new/"
};

exports.trimRetrieveRequest = function(input) {
    input = input.slice(1); // trim leading "/"
    if (/\/$/.test(input)) {
	input = input.slice(0, -1); // trim tailing "/"
    }
    return input;
};
