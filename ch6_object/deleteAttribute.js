"use strict";

let point = {
    x: 1,
    y: 1
}
console.log(point)
console.log(delete point.x)
console.log(point)


// delete Object.prototype
var x = 1;
console.log(globalThis.x)
delete globalThis.x
console.log(globalThis.x)

function f(){}
console.log(globalThis.f)
delete globalThis.f
// delete x