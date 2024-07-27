/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param index int整型 
 * @return int整型
 */
export function GetUglyNumber_Solution(index: number): number {
    // write code here
    const dp: number[] = [];
    dp[0] = 0;
    dp[1] = 1;

    let p2 = 1, p3 = 1, p5 = 1;
    for(let i = 2; i <= index; i++){
        dp[i] = Math.min(dp[p2] * 2, dp[p3] * 3, dp[p5] * 5);

        if(dp[i] === dp[p2] * 2){
            p2++;
        }

        if(dp[i] === dp[p3] * 3){
            p3++
        }

        if(dp[i] === dp[p5] * 5){
            p5++;
        }
    }
    return dp[index];
}

console.log(GetUglyNumber_Solution(7));