let num1 = 1_0000_0000
console.log(Number.MIN_VALUE / 2)

// let x = Number.NaN
// console.log(x != x)

// console.log(isFinite("222"))
// console.log(Number.isFinite("222"))



let x = 0.3 - 0.2
let y = 0.2 - 0.1
console.log(x === y)
console.log(x, ":", y)



// bigInt
let num = 1234n
let string = "1" + "0".repeat(100)
console.log(BigInt(string))

console.log(1 < 2n)


// date
let timestamp = Date.now()
let now = new Date()
let ms = now.getTime()
let iso = now.toISOString()

console.log(ms, ":::", iso)
