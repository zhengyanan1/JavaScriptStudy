/**
 * 异步文件写入
 * fs.open(path[, flags[, mode]], callback)
 */

const fs = require('fs')

fs.open('hello2.txt', 'w', function (err,fd){
    if(!err) {
        fs.write(fd, "今天月色也很美异步~", function (err){
            if(!err){
                console.log("写入成功")
            }


            fs.close(fd, function (err){
                if(!err){
                    console.log('文件关闭成功~')
                }
            })
        })
    }
    else {
        console.log(err)
    }
})