function jumpFloor(number)
{
    if(number <= 2) return number

    let dp = []
    dp[1] = 1
    dp[2] = 2

    for(let i = 3; i <= number; i++){
        dp[i] = dp[i - 1] + dp[ i - 2]
    }

    return dp[number]
}
module.exports = {
    jumpFloor : jumpFloor
};