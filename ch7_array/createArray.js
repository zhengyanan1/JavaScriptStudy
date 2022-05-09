// 数组字面量
let empty = []
let primes = [2, 3, 5, 7, 11]

let undefs = [ , ,]
let count = [1, , 3]
console.log(undefs[0], undefs[1], undefs[2])
console.log(count)


// 扩展操作符
let a = [1, 2, 3]
let b = [0, ...a, 4]
console.log(b)

// array 构造函数
let a1 = new Array()
let a2 = new Array(5)
let a3 = new Array(4,2)

console.log(a1, a2, a3)



// Array.of




// Array.from




function foo(name, age, sex) {
    console.log(arguments);
    console.log(arguments.length)
}

foo('name', 'age', 'sex')