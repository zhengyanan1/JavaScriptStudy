function jumpFloorII(number)
{
    let dp = [1]
    let sum = [1]
    for(let i = 1; i < number; i++){
        dp[i] = 1 + sum[i - 1]
        sum[i] = sum[i - 1] + dp[i]
    }

    return dp[number - 1]
}

function jumpFloorII(number)
{
    let dp = [1]
    for(let i = 1; i < number; i++){
        dp[i] = 2 * dp[ i - 1]
    }

    return dp[number - 1]
}
module.exports = {
    jumpFloorII : jumpFloorII
};