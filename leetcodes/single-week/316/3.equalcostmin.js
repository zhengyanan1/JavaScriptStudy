/**
 * @param {number[]} nums
 * @param {number[]} cost
 * @return {number}
 */

var minCost2 = function(nums, cost){
    let sum = 0n
    for (let i = 0; i < cost.length; i++) sum += BigInt(cost[i])

    let flag = []
    for(let i = 0; i < nums.length; i++)    flag[i] = i
    flag.sort((index1, index2)=> nums[index1] - nums[index2])

    let now = 0n, target = -1
    for (let i = 0; i < flag.length; i++) {
        const curIndex = flag[i];
        now += BigInt(cost[curIndex])
        if(now > sum / 2n){
            target = nums[curIndex]
            break
        }
    }

    let result = 0n
    for (let i = 0; i < nums.length; i++) {
        result +=  BigInt(Math.abs(nums[i] - target)) * BigInt(cost[i])
    }
    return result
}




 var minCost = function(nums, cost) {
    let minCost = Number.MAX_SAFE_INTEGER
    
    let helpSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i];
        
        if(helpSet.has(cur))    continue
        
        minCost = Math.min(calculateCost(nums, cost, cur), minCost)
        helpSet.add(cur)
    }

    return minCost
};

function calculateCost(nums, cost, target){
    let totalCost = 0;
    for (let i = 0; i < nums.length; i++) {
        totalCost += Math.abs(nums[i] - target) * cost[i]
    }
    return totalCost
}

module.exports ={
    minCost
}

console.log(minCost2([1,3,5,2], [2,3,1,14]))
console.log(minCost2([2,2,2,2,2], [4,2,8,1,3]))

// 1907611126748
// 2150445432663
