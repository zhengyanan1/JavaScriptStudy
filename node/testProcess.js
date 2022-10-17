
const fs = require('fs')
const inputStream = fs.createReadStream('1.txt')
const outputStream = fs.createWriteStream('2.txt')

inputStream.pipe(outputStream)