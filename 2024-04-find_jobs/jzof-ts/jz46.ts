/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 */

// version2: 动态规划
export function solve2(nums: string): number {
    const numsReal = nums.split("").map(item => parseInt(item));
    const dp: number[] = []
    
    dp[-1] = 1;
    if(numsReal[0] >= 1 && numsReal[0] <= 9){
        dp[0] = 1
    }else{
        dp[0] = 0;
    }

    for(let i = 1; i < numsReal.length; i++){
        dp[i] = 0;
        const numForOneDigit = numsReal[i]
        if( numForOneDigit >= 1 && numForOneDigit <= 9){
            dp[i] += dp[i - 1];
        }

        const numForTwoDigit = numsReal[i - 1] * 10 + numsReal[i];
        if(numForTwoDigit >= 10 && numForTwoDigit <= 26){
            dp[i] += dp[i - 2];
        }
    }

    return dp[nums.length - 1];
}


// version1: 递归
export function solve(nums: string): number {
    // write code here
    const result = [0];
    const numsReal = nums.split("").map(item => parseInt(item));
    match(numsReal, 0, result);

    return result[0];
}

function match(nums: number[], nextIndex: number, result: number[]): void{
    if(nextIndex === nums.length){
        result[0]++;
        return;
    }
    const firstDigit = nums[nextIndex];
    if(firstDigit >= 1){
        match(nums, nextIndex + 1, result);
    }
    
    if(nextIndex + 1 < nums.length){
        const secondDigit = nums[nextIndex + 1];
        if(firstDigit === 1 || (firstDigit === 2 && secondDigit <= 6)){
            match(nums, nextIndex + 2, result);
        }
    }
}

console.log(solve2("100"));
// console.log(solve2("31717126241541717"));

