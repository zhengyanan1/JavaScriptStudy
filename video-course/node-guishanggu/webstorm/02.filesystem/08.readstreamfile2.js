/*
    read file by stream
 */

const fs = require('fs')

// create a readable stream
let rs = fs.createReadStream('./video.mov')
//create a writeable stream
let ws = fs.createWriteStream('./video3.mov')

rs.pipe(ws)
