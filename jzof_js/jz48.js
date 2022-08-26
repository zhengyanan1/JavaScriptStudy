/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return int整型
 */
 function lengthOfLongestSubstring( s ) {
    let start = 0

    let maxLen = 0
    let setHelper = new Set()
    for(let i = 0; i < s.length; i++){
        const cur = s[i]
        if(setHelper.has(cur)){
            maxLen = Math.max(maxLen, i - start)
            while(s[start] != cur){
                setHelper.delete(s[start])
                start++
            }
            start++
        }
        else{
            setHelper.add(cur)
        }
    }

    return Math.max(maxLen, setHelper.size)
}
module.exports = {
    lengthOfLongestSubstring : lengthOfLongestSubstring
};