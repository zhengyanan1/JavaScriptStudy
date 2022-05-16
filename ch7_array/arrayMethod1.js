// 迭代器方法

let a = [4, 2, 3]
a.forEach((value)=>{
    console.log(value, "***")
})

let b = a.map((x) =>{
    return x * x
})
console.log(b)

let c = a.filter((x) =>{
    return x < 3
})
console.log(c)

console.log(a.find((x)=>{
    return x < 5
}))

console.log(a.findIndex( x => x < 5))

console.log(a.every((x) =>{
    return x < 4
}))

console.log(a.some((x) =>{
    return x > 3
}))

console.log(a.some(isNaN))

console.log(a.reduce((x, y)=>{
    return x + y 
}, 0))

a.length = 0
// a.reduce((x, y) =>{
//     return x + y
// })