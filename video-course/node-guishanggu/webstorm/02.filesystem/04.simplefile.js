/**
 * 简单文件写入
 * fs.writeFile(file, data[, options], callback)
 * fs.writeFileSync(file, data[, options])
 */
const fs = require('fs')

fs.writeFile('hello3.txt', "writeFile",{flag: 'a+'} ,function (err){
    if(!err){
        console.log('写入成功writeFile')
    }
})