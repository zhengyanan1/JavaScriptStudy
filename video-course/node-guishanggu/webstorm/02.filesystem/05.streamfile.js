/***
 * 同步、异步、简单文件 都不适合大文件的写入
 * 流式文件写入
 */

const fs = require('fs')

let ws = fs.createWriteStream('hello3.txt')


//可以监听流的open 和close来监听打开 和关闭
ws.once('open', function (){
    console.log("open~~~")
})
ws.once('close', function (){
    console.log('close~~')
})


//通过ws写内容
ws.write('通过stream 1\n')
ws.write('通过stream 2\n')
ws.write('通过stream 3\n')
ws.write('通过stream 4\n')

//关闭流
ws.end() // no more data will be added into the stream