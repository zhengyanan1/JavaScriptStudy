/*
    1 同步文件读取
    2 异步文件读取
    3 简单文件读取

    4 流式文件读取
 */

const fs = require('fs')

fs.readFile("./head.jpg", function (err, data){
    if(!err){
        console.log(data.length)
        fs.writeFile('hello.jpg', data, function (err){
            if (!err){
                console.log("file write success")
            }
        })
    }
})
