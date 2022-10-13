/*
    read file by stream
 */

const fs = require('fs')

// create a readable stream
let rs = fs.createReadStream('./video.mov')
//create a writeable stream
let ws = fs.createWriteStream('./video2.mov')

// listen
rs.once('open', function (){
    console.log("open read stream")
})
rs.once('close', function (){
    console.log('close read stream')
    ws.end()
})

ws.once('open', function (){
    console.log('open write stream')
})
ws.once('close', function (){
    console.log('close write stream')
})


rs.on('data', function (chunk){
    console.log(chunk.length)
    ws.write(chunk)
})