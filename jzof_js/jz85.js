/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
 function FindGreatestSumOfSubArray( array ) {
    let dp = []
    let dpStartIndexs = []
    dp[0] = array[0]
    dpStartIndexs[0] = 0

    for(let i = 1; i < array.length; i++){  // 以i结尾
        if(array[i] <= array[i] + dp[i - 1]){
            dpStartIndexs[i] = dpStartIndexs[i - 1]
            dp[i] = array[i] + dp[i - 1]
        }
        else{
            dpStartIndexs[i] = i
            dp[i] = array[i]
        }
    }

    let maxLen = -1
    let maxLenStart = -1
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < array.length; i++){
        if(dp[i] > max){
            max = dp[i]
            maxLenStart = dpStartIndexs[i]
            maxLen = i - dpStartIndexs[i] + 1
        }
        if(dp[i] === max){
            if(maxLen < i - dpStartIndexs[i] + 1){
                maxLen = i - dpStartIndexs[i] + 1
                maxLenStart = dpStartIndexs[i]
            }
        }
    }

    return array.slice(maxLenStart, maxLenStart + maxLen)
}
module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};

// array.slice 是copy的，不影响原数组
// let s = [1, 2, 3, 4, 5]
// let part = s.slice(0, 3)
// console.log(part)
// part[0] = 100
// console.log(part, s)