/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param number int整型 
 * @return int整型
 */
export function jumpFloorII(num: number): number {
    // write code here

    const dp: number[] = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= num; i++){
        dp[i] = 0;
        for(let j = i - 1; j >= 0; j--){
            dp[i] += dp[j];
        }
    }

    return dp[num];
}

console.log(jumpFloorII(6));
console.log(jumpFloorII(5));
console.log(jumpFloorII(4));
console.log(jumpFloorII(3));
console.log(jumpFloorII(2));
console.log(jumpFloorII(1));

