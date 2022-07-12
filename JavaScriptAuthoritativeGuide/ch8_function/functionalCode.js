function compose(f, g){
    return function(...args){
        return f.call(this, g.apply(this, args))
    }
}
var aaa = 1
globalThis.bbb = 5
console.log(globalThis.hasOwnProperty("aaa"))

const sum = (x, y) => {
    console.log(this.bbb)
    return x + y
}

const sum2 = function(x, y){
    console.log(this.bbb)
    return x + y
}
const square = (x) => x * x
console.log(compose(square, sum)(2, 3))

let a = [1,2]
console.log(a.join(")))"))



