
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param number int整型 
 * @return int整型
 */
export function rectCover(num: number): number {
    if(num === 0)   return 0;
    // write code here
    const dp: number[] = [];
    dp[1] = 1;
    dp[2] = 2;
    for(let i = 3; i <= num; i++){
        dp[i] = dp[i - 1] + dp[ i - 2];
    }

    return dp[num];
}
