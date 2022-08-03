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



let GetBulletData = (function(){
    let _NUM = 1
    return function(){ return "测试弹幕" + _NUM++}
}());


console.log(GetBulletData())
console.log(GetBulletData())
console.log(GetBulletData())


let myMap = new Map()
myMap.set(1, "num 1")
myMap.set("1", "string 1")

console.log(myMap)


let ss = "0.3808594"
console.log(parseFloat(ss))


let num = 2.6 * 17
console.log("value: ", num)


console.log(Math.sin(Math.PI / 2))


class Name{
    name = "default"

    constructor(){
        console.log(this.name)
    }
}

new Name()

let visited = Array(4).fill().map(()=> Array(3).fill(false))


visited[0][0] = true
console.log(visited)

console.log( 123 / 10)

const {movingCount} = require("./../jzof_js/jz13")



console.log(movingCount(1, 2, 3),"---")