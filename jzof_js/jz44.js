/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return int整型
 */
 function findNthDigit( n ) {
    if(n === 0) return 0
    let count = 9
    let digitLen = 1
    while(n > count * digitLen){
        n -= count * digitLen

        count *= 10
        digitLen++
    }

    let index = Math.floor(n / digitLen)
    let extra = n % digitLen

    let target = getStartNum(digitLen) + index - 1
    if(extra === 0) return target % 10

    target++
    target = target.toString() 
    return target.charAt(extra - 1) - '0'
}

function getStartNum(digitLen){
    return parseInt("1" + "0".repeat(digitLen - 1))
}

module.exports = {
    findNthDigit : findNthDigit
};
