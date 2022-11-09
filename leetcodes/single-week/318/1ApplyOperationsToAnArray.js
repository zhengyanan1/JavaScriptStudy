/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var applyOperations = function(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if(nums[i] == nums[i + 1]){
            nums[i] *= 2
            nums[i + 1] = 0
        }
    }

    let zeroHelper = []
    let i = 0
    while(i < nums.length){
        if(nums[i] === 0){
            nums.splice(i, 1)
            zeroHelper.push(0)
        }
        else{
            i++
        }
    }

    return [...nums, ...zeroHelper]
};


console.log(applyOperations([1,2,2,1,1,0]))
console.log(applyOperations([0, 1]))


module.exports = {
    applyOperations
}