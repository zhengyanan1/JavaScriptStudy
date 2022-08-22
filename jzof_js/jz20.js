/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return bool布尔型
 */
 function isNumeric( str ) {
    // write code here
    str = str.trim()

    let parts = str.split(/[eE]/)
    if(parts.length > 2)  return false
    if(parts.length == 2) return (isInt(parts[0]) || isFloat(parts[0])) && isInt(parts[1])
    else                  return isInt(parts[0]) || isFloat(parts[0])
}

function isInt(str){
    str = str.trim()
    if(str.length === 0)    return false    

    if(str[0] === '+' || str[0] === '-')    str = str.substring(1)

    return isPureNumbers(str)
}

function isFloat(str){
    str = str.trim()
    if(str.length === 0)    return false    

    if(str[0] === '+' || str[0] === '-')    str = str.substring(1)
    if(str.length === 0)    return false

    let parts = str.split(".")
    if(parts.length !== 2)  return false

    if(parts[0].length === 0)           return isPureNumbers(parts[1])
    else if(parts[1].length === 0)      return isPureNumbers(parts[0])
    else                                return isPureNumbers(parts[0]) && isPureNumbers(parts[1])
}

function isPureNumbers(str){
    if(str.length === 0)    return false

    for(let i = 0; i < str.length; i++){
        if(str[i] < '0' || str[i] > '9')    return false
    }

    return true
}

module.exports = {
    isNumeric : isNumeric
};

console.log(isNumeric("1a3.14"))