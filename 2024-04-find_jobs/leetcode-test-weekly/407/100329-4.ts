/**
 * 
100329. 使数组等于目标数组所需的最少操作次数 显示英文描述 
通过的用户数706
尝试过的用户数1238
用户总通过次数827
用户总提交次数2518
题目难度Hard
给你两个长度相同的正整数数组 nums 和 target。

在一次操作中，你可以选择 nums 的任何子数组，并将该子数组内的每个元素的值增加或减少 1。

返回使 nums 数组变为 target 数组所需的 最少 操作次数。

 

示例 1：

输入： nums = [3,5,1,2], target = [4,6,2,4]

输出： 2

解释：

执行以下操作可以使 nums 等于 target：
- nums[0..3] 增加 1，nums = [4,6,2,3]。
- nums[3..3] 增加 1，nums = [4,6,2,4]。

示例 2：

输入： nums = [1,3,2], target = [2,1,4]

输出： 5

解释：

执行以下操作可以使 nums 等于 target：
- nums[0..0] 增加 1，nums = [2,3,2]。
- nums[1..1] 减少 1，nums = [2,2,2]。
- nums[1..1] 减少 1，nums = [2,1,2]。
- nums[2..2] 增加 1，nums = [2,1,3]。
- nums[2..2] 增加 1，nums = [2,1,4]。

 

提示：

1 <= nums.length == target.length <= 105
1 <= nums[i], target[i] <= 108
 */

// version2: 
function minimumOperations(nums: number[], target: number[]): number {
    const diff: number[] = []
    for(let i = 0; i < nums.length; i++){
        diff[i] = target[i] - nums[i];
    }
    // console.log(diff)

    let result = 0;
    let lastDiff = 0;

    for(let i = 0; i < diff.length; i++){
        const curDiff = diff[i];
        if(curDiff > 0){
            if(lastDiff <= 0){
                result+= curDiff;
            }else{  // last > 0
                if(curDiff > lastDiff){
                    result += curDiff - lastDiff
                }
            }
        }else if(curDiff === 0){
        }else{ //<0
            if(lastDiff >= 0){
                result += Math.abs(curDiff);
            }else{ // last < 0
                if(curDiff < lastDiff){
                    result += lastDiff - curDiff;
                }
            }
        }
        lastDiff = curDiff;
    }

    return result;
};




// version1: overtime
function minimumOperations1(nums: number[], target: number[]): number {
    const diff: number[] = []
    for(let i = 0; i < nums.length; i++){
        diff[i] = target[i] - nums[i];
    }
    // console.log(diff)

    let result = 0;
    let lastDiffType = 0; // -1 0 1 => <0, 0, >0
    while(diff.some(one => one !== 0)){
        for(let i = 0; i < diff.length; i++){
            if(diff[i] > 0){
                if(lastDiffType <= 0){
                    result++;
                }
                diff[i]--;
                lastDiffType = 1;
            }else if(diff[i] == 0){
                lastDiffType = 0;
            }else{ //<0
                if(lastDiffType >= 0){
                    result++;
                }
                diff[i]++;
                lastDiffType= -1;
            }
        }
        lastDiffType = 0;
    }

    return result;
};

console.log(minimumOperations([3,5,1,2], [4,6,2,4]), minimumOperations1([3,5,1,2], [4,6,2,4]));
console.log(minimumOperations([1,3,2],  [2,1,4]), minimumOperations([1,3,2],  [2,1,4]));
console.log(minimumOperations([5,9,2,2], [7,9,3,8]), minimumOperations([5,9,2,2], [7,9,3,8]));
console.log(minimumOperations([9,2,6,10,4,8,3,4,2,3], [9,5,5,1,7,9,8,7,6,5]), minimumOperations([9,2,6,10,4,8,3,4,2,3], [9,5,5,1,7,9,8,7,6,5]));




