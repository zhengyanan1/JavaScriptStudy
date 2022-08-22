/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 最大位数
 * @return int整型一维数组
 */
 function printNumbers( n ) {
    const len = Math.pow(10, n) - 1;
    let nums = new Array(len)
    for(let i = 0; i < len; i++)    nums[i] = i + 1

    return nums
}
module.exports = {
    printNumbers : printNumbers
};