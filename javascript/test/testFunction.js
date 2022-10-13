function A(){
    console.log("a", arguments)
}
let a = A

let b = ()=>{
    console.log('b', arguments)
}

console.log(a.__proto__, b.__proto__)

// a()
// b()

const fs = require('fs')
fs.createReadStream()
fs.read()













// function* generator(){
//     yield 1
//     yield 2
//     yield 3
// }

// let ge = generator()
// console.log(ge.next().value)
// console.log(ge.next().value)
// console.log(ge.next().value)

