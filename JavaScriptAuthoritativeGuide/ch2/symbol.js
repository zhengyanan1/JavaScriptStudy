
let s1 = Symbol('hhh')

let s2 = Symbol('hhh')

console.log(s1 == s2)

let f1= Symbol.for("aaa")
let f2= Symbol.for("aaa")
console.log(f1 === f2)

console.log(globalThis)