// first method
let point = {
    x: 0, 
    y: 0
}
console.log(typeof point)
console.log(point.prototype)


let a = new Array()
console.log(a)

console.log(Array.prototype)
console.log(Object.prototype)


let base = {
    x: 1,
    y: 2
}
let o1 = Object.create(base)
console.log(o1.x + o1.y)
console.log(base.x, o1.x)
o1.x = 2
console.log(base.x, o1.x)

console.log(undefined == null)