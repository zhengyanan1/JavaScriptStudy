let nums = [100, 12]
let iterator = nums[Symbol.iterator]()
for(let result = iterator.next(); !result.done; result = iterator.next()){
    console.log(result.value)
}