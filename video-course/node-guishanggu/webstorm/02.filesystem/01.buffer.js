/**
 * Buffer（缓冲区）
 */

// let str = "Hello中"
// let buff = Buffer.from(str)
// console.log(str.length)
// console.log(buff.length, buff)


//创建指定大小的buffer
// let buf2 = new Buffer(10)

//
let buf2 = Buffer.alloc(10);
buf2[0] = 88
buf2[1] = 0xff
buf2[9] = 257
console.log(buf2)
console.log(buf2[1].toString(16))


let buf3 = Buffer.allocUnsafe(10)
console.log(buf3)