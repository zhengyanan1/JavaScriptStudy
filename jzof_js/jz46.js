/**
 * 解码
 * @param nums string字符串 数字串
 * @return int整型
 */
 function solve( nums ) {
    let dp = []
    const cur = nums[0]
    dp[-1] = 1
    if(parseInt(cur) > 0) dp[0] = 1

    for(let i = 1; i < nums.length; i++){
        const cur = parseInt(nums[i])
        const curAndPre = parseInt(nums[i - 1] + nums[i])
        dp[i] = 0
        
        if(cur > 0)                             dp[i] += dp[i - 1]
        if(cur != curAndPre && curAndPre > 0 && curAndPre <= 26)    dp[i] += dp[i - 2]
    }

    return dp[nums.length - 1]
}
module.exports = {
    solve : solve
};

console.log(solve('101'))