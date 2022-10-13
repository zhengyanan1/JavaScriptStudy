let a = 10
b = 1
console.log(global.a)
console.log(global.b)

/**
 * arguments.callee - 保存的是当前执行的函数对象
 */
console.log(arguments)
// console.log(arguments.callee + "")
console.log(module.exports === exports)