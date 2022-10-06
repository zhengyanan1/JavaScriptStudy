const dgram = require("dgram")

let message = Buffer.from("深入浅出node.js")
let client = dgram.createSocket('udp4')

client.send(message, 0, message.length, 41234, 'localhost', function(err, bytes){
    client.close()
})