
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param ReverseSentence string字符串 
 * @return string字符串
 */
export function ReverseSentence(ReverseSentence: string): string {
    // write code here
    if(ReverseSentence == '')   return '';

    return ReverseSentence.split(' ').reverse().join(' ');
}

console.log(ReverseSentence("nowcoder. a am I"));
