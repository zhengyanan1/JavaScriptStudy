const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')
const readline = require('readline')

function serve(rootDirectory, port){
    let server = new http.Server()
    server.listen(port)
    console.log("listening on port", port)

    server.on('request', (request, response)=>{
        let endpoint = url.parse(request.url).pathname

        if(endpoint === '/test/mirror'){
            response.setHeader("Content-Type", "text/plain;charset=UTF-8");
            response.writeHead(200)

            response.write(`${request.method} ${request.url} HTTP/${request.httpVersion}\r\n`)

            let headers = request.rawHeaders;
            for(let i = 0; i < headers.length; i += 2){
                response.write(`${headers[i]}: ${headers[i + 1]}\r\n`);
            }
            response.write("\r\n")

            request.pipe(response)
        }
        else{
            let filename = endpoint.substring(1)
            filename = filename.replace(/\.\.\//g, "")
            filename = path.resolve(rootDirectory, filename)
            console.log("filename:", filename)

            let type;
            switch(path.extname(filename)){
                case ".html": type='text/html'; break;
                default: type = "application/octet-stream"; break;
            }

            let stream = fs.createReadStream(filename)
            stream.once('readable', ()=>{
                response.setHeader("Content-Type", type)
                response.writeHead(200)
                stream.pipe(response)
            })

            stream.on("error", (err)=>{
                response.setHeader("Contetn-Type", "text/plain charset=UTF-8")
                response.writeHead(200)
                response.end(err.message)
            })
        }
    })
}

serve(process.argv[2] || "/tmp", parseInt(process.argv[3]) || 8000)