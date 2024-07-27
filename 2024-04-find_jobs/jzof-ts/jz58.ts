/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @param n int整型 
 * @return string字符串
 */
export function LeftRotateString(str: string, n: number): string {
    // write code here

    if(!str || str.length === 0) return '';
    const LEN =  str.length;
    n %= LEN;

    return str.substring(n) + str.substring(0, n);
}


console.log(LeftRotateString("abcXYZdef",3))
console.log(LeftRotateString("aab",10))
console.log(LeftRotateString("",6))
console.log(2 % 0)



