function cutRope(num)
{
    if(num < 4)     return num - 1
    if(num == 4)    return 4;
    let dp = [0, 1, 2, 3, 4]

    for(let i = 5; i <= num; i++){
        dp[i] = 0
        for(let j = 1; j < i; j++){
            dp[i] = Math.max(dp[i], j * dp[i - j])
        }
    }
    return dp[num]
}
module.exports = {
    cutRope : cutRope
};