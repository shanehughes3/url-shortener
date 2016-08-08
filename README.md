# url-shortener

Creates and redirects shortened URLs.

### Usage

##### Create
To create a new shortened URL, visit /new/<target-URL>. The server will return
a JSON object containing the new key.  Example:

Visiting: `http://<server-location>/new/http://www.google.com/`

... returns:
```javascript
{"input":"http://www.google.com/",
 "short-url":"http://<server-location>/57a8e27154a8c14511c6f3c1"}
```

All URLs must be provided in the full `http://www.domain.com/` format.
Failure to do so will result in an error.

##### Retrieve
To use a previously created URL, simply visit what was provided upon creation.
The server will redirect.

##### Errors
Upon any error (either on creation or retrieval), the server will return a
JSON object containing the provided input and the error encountered.