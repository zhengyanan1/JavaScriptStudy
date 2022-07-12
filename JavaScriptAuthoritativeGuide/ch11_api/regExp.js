let pattern = /s$/
let pattern2 = new RegExp("s$")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
// string ---------------------- 
// search
console.log("JavaScript".search(/script/ui))
console.log("Python".search(/script/ui))


// replace
let quote = /"([^"]*)"/g
console.log('he said "stop"'.replace(quote, "<<$1>>"))
console.log('12 * 12'.replace(/\d+/g, 
    function(value){ return parseInt(value) / 2}
))

// match 
console.log("123 456, 33 33,8888".match(/(\d+)\s+(\d+)/))
// matchAll

let results = "123 456, 33 33,8888".matchAll(/(\d+)\s+(\d+)/g)
for(let result of results)  console.log("*******", result)
// split


// regexp--------------------
// test()
// exec()


