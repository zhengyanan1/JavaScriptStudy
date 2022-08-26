/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param grid int整型二维数组 
 * @return int整型
 */
 function maxValue( grid ) {
    // write code here
    const rows = grid.length
    const cols = grid[0].length

    const dp = new Array(rows).fill().map(()=> new Array(cols).fill(0))

    dp[0][0] = grid[0][0]

    for(let i = 1; i < cols; i++)   dp[0][i] = dp[0][i - 1] + grid[0][i]
    for(let i = 1; i < rows; i++)   dp[i][0] = dp[i - 1][0] + grid[i][0]

    for(let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
        }
    }

    return dp[rows - 1][cols - 1]
}
module.exports = {
    maxValue : maxValue
};