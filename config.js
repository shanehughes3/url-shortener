module.exports = {
    db: process.env.MONGOLAB_URI || "mongodb://localhost/url-shortener",
    serverURL: process.env.SERVER_URI || "http://localhost/"
}
