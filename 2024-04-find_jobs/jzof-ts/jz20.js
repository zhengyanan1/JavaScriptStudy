/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return bool布尔型
 */
function isInt(str){
    if(str.length === 0)    return false;
    const first = str.charAt(0);
    let startNumIndex = 0;
    if(first === '+' || first === '-'){
        startNumIndex = 1;
    }

    return isPureNumbers(str.substring(startNumIndex));
}
function isFloat(str){
    if(str.length === 0)    return false;
    const first = str.charAt(0);
    if(first === '+' || first === '-'){
        str = str.substring(1);
    }
    
    const parts = str.split('.');
    if(parts.length !== 2)  return false;

    return isPureNumbers(parts[0]) && parts[1] == ''
        || isPureNumbers(parts[0]) && isPureNumbers(parts[1])
        || parts[0] == '' && isPureNumbers(parts[1]);
}
function isPureNumbers(str){
    if(!str || str.length === 0)    return false;

    for(let i = 0; i < str.length; i++){
        const numForChar = parseInt(str.charAt(i));
        if(numForChar >= 0 && numForChar <= 9){
            continue;
        }else{
            return false;
        }
    }
    return true;
}

function isNumeric( str ) {
    // write code here
    str = str.trim();
    let parts = str.split(/[eE]/g);
    if(parts.length === 1){
        return isInt(parts[0]) || isFloat(parts[0]);
    }else if(parts.length === 2){
        return (isInt(parts[0]) || isFloat(parts[0])) && isInt(parts[1]);
    }

    return false;
}

module.exports = {
    isNumeric : isNumeric
};

// console.log(isNumeric("123.45e+6"));
// console.log(isNumeric("1.2.3"));
// console.log(isNumeric("."));
// console.log(isNumeric("    .2  "));



