/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return int整型
 */
export function cutRope(n: number): number {
    // write code here
    let result: number[] = [];
    result[2] = 1;
    result[3] = 2;
    result[4] = 4;
    result[5] = 6;
    result[6] = 9;
    result[7] = 12;

    for(let i = 8; i <= n; i++){
        result[i] = Math.max(result[i - 2] * 2, result[i - 3] * 3);
    }


    return result[n];
}
