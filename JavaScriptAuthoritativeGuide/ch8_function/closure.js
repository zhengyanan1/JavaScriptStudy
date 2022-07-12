// "use strict"

// let uniqueInteger = (function(){
//     let counter = 0
//     return function(){ return counter++ }
// }());
// console.log(uniqueInteger())
// console.log(uniqueInteger())
// console.log(uniqueInteger())
// console.log(uniqueInteger())
// console.log(uniqueInteger())




// function counter(){
//     let n = 0
//     return{
//         count: function(){ return n++},
//         reset: function(){ n = 0;}
//     }
// }

// let c = counter(), d = counter()

// console.log(c.count())
// console.log(c.count())
// console.log(c.count())
// console.log(d.count())
// console.log(c.reset())
// console.log(c.count())



function counter(){
    let n = 0
    return function(){ 
        console.log(this)
        return n++;
    }
}

let uniqueCounter = counter()
console.log("*" + uniqueCounter.name + "*")