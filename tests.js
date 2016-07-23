exports.isValidCreateRequest = function(input) {
    return /^\/new\/http[s]?:\/\/.*\.?.+\..+/.test(input);
}
