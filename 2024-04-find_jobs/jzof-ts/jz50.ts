/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return int整型
 */
export function FirstNotRepeatingChar(str: string): number {
    // write code here
    const map: any = {};

    for(let i =0; i < str.length; i++){
        const char = str.charAt(i);
        if(char in map){
            map[char] = 2;
        }else{
            map[char] = 1;
        }
    }

    for(let i = 0; i < str.length; i++){
        const char = str.charAt(i);
        if(map[char] === 1)   return i;
    }

    return - 1;
}

console.log(FirstNotRepeatingChar('google'));