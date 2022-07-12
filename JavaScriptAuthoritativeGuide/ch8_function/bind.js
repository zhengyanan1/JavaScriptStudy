var scope = "global"


function f(y){
    return this.x + y
}

let o = {x : 1}
let g = f.bind(o)
console.log(g(2))

let p = { x: 10, g}
console.log(p.g(2))



let sum = (x, y) => x + y
let succ = sum.bind(null, 1)
console.log(succ(8, 3))
console.log(succ.name)
console.log(sum)



console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
function construcFunction(){
    let scope = "local"
    return new Function("return ")
}

function conFunction2(){
    let scope = "local2"
    return function(){ return scope}
}

console.log(globalThis.scope)
console.log(construcFunction()(), conFunction2()())
