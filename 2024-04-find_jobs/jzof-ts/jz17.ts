/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 最大位数
 * @return int整型一维数组
 */
export function printNumbers(n: number): number[] {
    // write code here
    const max = Math.pow(10, n);
    const result = [];
    for(let i = 1; i < max; i++){
        result[i - 1] = i;
    }

    return result;
}

console.log(printNumbers(1))