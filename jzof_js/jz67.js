/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 1.去掉无用的前导空格
2.第一个非空字符为+或者-号时，作为该整数的正负号，如果没有符号，默认为正数
3.判断整数的有效部分：
3.1 确定符号位之后，与之后面尽可能多的连续数字组合起来成为有效整数数字，如果没有有效的整数部分，那么直接返回0
3.2 将字符串前面的整数部分取出，后面可能会存在存在多余的字符(字母，符号，空格等)，这些字符可以被忽略，它们对于函数不应该造成影响
3.3  整数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231的整数应该被调整为 −231 ，大于 231 − 1 的整数应该被调整为 231 − 1
4.去掉无用的后导空格
 * 
 * @param s string字符串 
 * @return int整型
 */

function StrToInt( s ) {
    let index = 0, len = s.length;

    while(s[index] == ' ')   index++
    if(index === len)   return 0

    let flag = 1
    if(s[index] === '-'){
        flag = -1
        index++
    }
    else if(s[index] === '+'){
        flag = 1
        index++
    }
    else if(s[0] >= '0' && s[0] <= '9'){
        flag = 1
    }
    else{
        return 0
    }

    let res = 0
    while(index < len){
        if(s[index] >= '0' && s[index] <= '9'){
            res = 10 * res + (s[index] - '0')
        }
        else{
            break
        }

        if(res >= POW2_31)  break
        if(res == POW2_31 - 1 && flag > 0)  break

        index++
    }

    res = flag * res
    if(res < -POW2_31)      res = -POW2_31
    if(res > POW2_31 - 1)   res = POW2_31 - 1
    if(res = -0)    res = 0
    return res
}
const POW2_31 = 2147483648

//  function StrToInt( s ) {
//     s = s.trim()
//     let isPositive = true
//     if(s[0] === '-'){
//         isPositive = false
//         s = s.substring(1)
//     }
//     else if(s[0] === '+'){
//         s = s.substring(1)
//         isPositive = true
//     }
//     else if(s[0] >= '0' && s[0] <= '9'){
//         isPositive = true
//     }
//     else{
//         return 0
//     }
//     s = s.trim()

//     let lastDigit = -2 // [include]
//     for(let i = 0; i < s.length; i++){
//         if(s[i] < '0' || s[i] > '9'){
//             lastDigit = i - 1
//             break
//         }
//     }
//     if(lastDigit == -2) lastDigit = s.length - 1
//     let numStr = s.substring(0, lastDigit + 1)
//     if(numStr.length === 0) return 0

//     let unZeroIndex = 0
//     while(numStr[unZeroIndex] == '0')   unZeroIndex++
//     numStr = numStr.substring(unZeroIndex)
//     if(numStr === '')   return 0

//     let result = -1
//     if(numStr.length > 10){
//         result = isPositive ? POW2_31 - 1 : -POW2_31
//     }
//     else{
//         result = parseInt(numStr) * (isPositive ? 1 : -1)
//     }

//     if(result < -POW2_31)      result = -POW2_31
//     if(result > POW2_31 - 1)    result = POW2_31 - 1

//     return result
// }
module.exports = {
    StrToInt : StrToInt
};

// let a = "abc"
// a[0] = 'g'

// console.log(('9' - '0')* 8)
console.log(-1 * 0)