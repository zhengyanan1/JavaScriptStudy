/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return int整型
 */
export function Fibonacci(n: number): number {
    // write code here
    let result: number[] = [];
    result[1] = 1;
    result[2] = 1;
    

    for(let i = 3; i <= n; i++){
        result[i] = result[i - 1] + result[i - 2];
    }
    return result[n];
}


export function Fibonacci2(n: number): number {
    // write code here
    let pre = 1, current = 1, next;
    if(n === 1) return pre;
    if(n === 2) return current;

    for(let i = 3; i <= n; i++){
        next = pre + current;

        pre = current;
        current = next;
    }
    return next;
}
