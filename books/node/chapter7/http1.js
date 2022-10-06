const http = require('http')
const url = require('url')
const querystring = require('querystring')
const formidable = require('formidable');

http.createServer(function(req, res){
    url.parse(req.url, true)
    querystring.parse()

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    })
    res.end('Hello World\n')
}).listen(1337, '127.0.0.1')

console.log("Server running at http://127.0.0.1:1337")