
// console.log(b)
// var b = 1

console.log(this)
console.log(this.b)


function foo() {
    // console.log(a);
    a = 1;
}

foo(); // ???

function bar() {
    // a = 1;
    console.log(a);
}
bar(); // ???

console.log(a)
console.log(global)

this.cc = 2
console.log(module.exports)



console.log("*".repeat(30))

// 2.----------------
// console.log(foo);

// function foo(){
//     console.log("foo");
// }

// var foo = 1;