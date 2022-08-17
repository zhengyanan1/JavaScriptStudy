function FindGreatestSumOfSubArray(array)
{
    let dp = []
    dp[0] = array[0]
    for(let i = 1; i < array.length; i++){
        dp[i] =  Math.max(dp[i - 1] + array[i], array[i])
    }

    let max = dp[0]
    for(let i = 1; i < dp.length; i++){
        max = Math.max(max, dp[i])
    }

    return max
}
module.exports = {
    FindGreatestSumOfSubArray : FindGreatestSumOfSubArray
};

console.log(FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]))