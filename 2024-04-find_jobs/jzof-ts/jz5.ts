/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return string字符串
 */

//v1
export function replaceSpace(s: string): string {
    // write code here
    
    return s.replaceAll(' ', '%20');
}

// v2
export function replaceSpace2(s: string): string {
    // write code here
    const parts = s.split(" ");
    console.log(parts);
    
    return parts.join("%20");
}


console.log(replaceSpace2("We Are Happy"));
console.log(replaceSpace2(" "));

