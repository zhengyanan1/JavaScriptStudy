let a = []
console.log(typeof a)


const  s = "number[]fdsjap"
const  s2 = "number"
const  s3 = ""
let result = s.match(/(\w+(\[\])*)/)

console.log(result)


console.log(typeof(false))
console.log(Boolean("2"))

let nums = [1, 2, 3]
for(let i = 0, len = nums.length; i < len; i++){
    console.log(nums[i])
}
// console.log(i, len)  // i is not defined!!!