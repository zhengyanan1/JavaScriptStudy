/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return int整型
 */

// version2: 
export function lengthOfLongestSubstring(s: string): number {
    // write code here
    const map: Map<string, number> = new Map<string, number>();
    let maxLen = 1;

    let lastStart = 0;
    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);
        if(map.has(char)){
            maxLen = Math.max(maxLen, i - lastStart);
            lastStart =  Math.max(map.get(char) + 1, lastStart);
        }
        map.set(char, i);
    }
    maxLen = Math.max(maxLen, s.length - lastStart);

    return maxLen;
}

// version1: 暴力破解 超时
export function lengthOfLongestSubstring1(s: string): number {
    // write code here
    let maxLen = 1;
    for(let i = 0; i < s.length; i++){
        for(let j = i; j < s.length; j++){
            if(!isRepeat(s.substring(i, j + 1))){
                maxLen = Math.max(j - i + 1, maxLen);
            }
        }
    }

    return maxLen;
}
function isRepeat(s: string):boolean{
    const map:any = {}
    for(let i = 0; i < s.length; i++){
        const char = s.charAt(i);
        if(map[char])   return true;
        map[char] = true;
    }

    return false;
}


console.log(lengthOfLongestSubstring('dd'));
// console.log(lengthOfLongestSubstring('kabcabc9k1c'));
// console.log(lengthOfLongestSubstring('N$po-O66.n=h!!#oJM#MNh:kIwxSEjFP7F)(@ROpH5x|t*XC+[`jkWor@F!Cmu8{|rft,fx;QM1p4W+U|9`gk_}(0*=cc93P'));
// console.log(lengthOfLongestSubstring('pwwkew'));