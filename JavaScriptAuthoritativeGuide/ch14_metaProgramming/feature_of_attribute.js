console.log(Object.getOwnPropertyDescriptor({x: 2}, "x"))

const random = {
    get octet(){
        return Math.floor(Math.random() * 256)
    }
}
console.log(Object.getOwnPropertyDescriptor(random, "octet"))



let o = {}
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
})
console.log(o.x)
console.log(Object.keys(o))

Object.defineProperty(o, "x", {writable: false})
o.x = 2
console.log(o.x)

Object.defineProperty(o, "x", {value: 2})
console.log(o.x)
console.log(Object.getOwnPropertyDescriptor(o, "x"))

Object.defineProperty(o, "x", {get: function(){return 0}})
console.log(o.x)
console.log(Object.getOwnPropertyDescriptor(o, "x"))

Object.assign
