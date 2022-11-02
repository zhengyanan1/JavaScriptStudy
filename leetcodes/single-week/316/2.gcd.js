/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarrayGCD = function(nums, k) {
    let count = 0

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        if(current % k !== 0)    continue // 不存在以current开头的子数组

        let divider = current
        for (let j = i; j < nums.length; j++) {
            const curEnd = nums[j];
            
            if(curEnd % k !== 0)    break; // 不存在以curEnd结尾的子数组

            divider = gcd(divider, curEnd)
            if(divider === k)   count++
        }
    }

    return count
};

function gcd(a, b){
    if(a % b === 0) return b

    return gcd(b, a % b)
}

module.exports = {
    subarrayGCD
}

console.log(subarrayGCD([9,3,1,2,6,3], 3))
console.log(subarrayGCD([4], 7))
