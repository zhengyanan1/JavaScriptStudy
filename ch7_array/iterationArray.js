
let a = [1, 2, 3]
a[10] = 11

// for(let num of a)   console.log(num)

a.forEach((num , index, nums)=> {
    console.log(index, num , nums)
})


let i = 0, b = 3
console.log(i, b)


a = [1, 2, [3, 4, [5]]]
console.log(a)
// console.log(a.flat(3))
console.log(a.flatMap((value)=>{
    return value
}))



a = []
a.push(1, 4, 5)
console.log(a)

a = new Array(5)
a.fill(2)
console.log(a.lastIndexOf(2, 5))


a = [1, 3, 2, 4]
console.log(a.sort())
console.log(a.sort((a, b)=> b - a))

console.log(a.reverse())


let nums = [[1, 0], 2, 4]
console.log(nums.join("_"))
console.log(nums.toString().split(",2,"))
console.log(typeof nums)

for(let o of nums){
    console.log(o)
}