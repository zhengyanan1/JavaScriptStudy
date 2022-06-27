/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return string字符串
 */
 function replaceSpace( s ) {
    // write code here
    // return s.replace(/ /g, "%20")

    let words = []
    for(const _char of s){
        if(_char == ' ')    words.push("%20")
        else                words.push(_char)
    }
    return words.join("")
}
module.exports = {
    replaceSpace : replaceSpace
};