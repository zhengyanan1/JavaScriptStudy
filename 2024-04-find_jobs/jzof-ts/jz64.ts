
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param n int整型 
 * @return int整型
 */
export function Sum_Solution(n: number): number {
    // write code here

    return n && (n + Sum_Solution(n - 1));
}

console.log(Sum_Solution(5));
console.log(Sum_Solution(1));
