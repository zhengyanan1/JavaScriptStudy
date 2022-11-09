/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maximumSubarraySum = function(nums, k) {
    let maxSum = 0 
    let curSum = 0
    let choosedMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const cur = nums[i]

        curSum += cur
        if(i > k - 1){
            curSum -= nums[i - k]
        }

        if(choosedMap.has(cur)){
            choosedMap.set(cur, choosedMap.get(cur) + 1)
        }
        else{
            choosedMap.set(cur, 1)
        }

        if(i >= k - 1){
            const deleteNum = nums[i - k + 1]
            if(choosedMap.size === k){
                maxSum = Math.max(maxSum, curSum)
                choosedMap.delete(deleteNum)
            }
            else{
                let count = choosedMap.get(deleteNum)
                if(count > 1){
                    choosedMap.set(deleteNum, count - 1)
                }
                else{
                    choosedMap.delete(deleteNum)
                }
            }
        }
    }

    return maxSum
};

console.log(maximumSubarraySum([1,5,4,2,9,9,9], 3))
console.log(maximumSubarraySum([4, 4, 4], 3))
