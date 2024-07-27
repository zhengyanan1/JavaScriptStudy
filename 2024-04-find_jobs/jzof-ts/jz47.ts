/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param grid int整型二维数组 
 * @return int整型
 */
export function maxValue(grid: number[][]): number {
    // write code here
    const rows = grid.length;
    const columns = grid[0].length;

    const dp: number[][] = [];
    for(let i = 0; i < rows; i++){
        dp[i] = [];
    }

    dp[0][0] = grid[0][0];
    for(let i = 1; i < rows; i++){
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }
    for(let j = 1; j < columns; j++){
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    for(let i = 1; i < rows; i++){
        for(let j = 1; j < columns; j++){
            dp[i][j] = grid[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
    }

    return dp[rows - 1][columns - 1];
}


console.log(maxValue([[1,3,1],[1,5,1],[4,2,1]]));