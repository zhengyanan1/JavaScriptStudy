/**
 * file system: 通过node操作文件
 *
 * 文件写入：
 * 1）打开文件
 * 2）写入文件
 * 3）保存并关闭文件
 */
//同步写入
const fs = require('fs')
let fd =  fs.openSync('hello.txt', 'a+', )
fs.writeSync(fd, '今晚月色真美', )
fs.closeSync(fd)
