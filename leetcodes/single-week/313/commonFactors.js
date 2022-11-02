/**
 * 6192. 公因子的数目
 * 
 * 给你两个正整数 a 和 b ，返回 a 和 b 的 公 因子的数目。

如果 x 可以同时整除 a 和 b ，则认为 x 是 a 和 b 的一个 公因子 。
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var commonFactors = function(a, b) {
    let small = Math.min(a, b)
    let max = Math.max(a, b)
    let sqrt = Math.sqrt(small)

    let result = 0
    // 2种方式都可以，由于题目的数据规模太小，所以方式1的优越性体现不出来

    // vesion1:
    // for(let i = 1; i <= sqrt; i++){
    //     let another = small / i
    //     if(small % i === 0 && max % i === 0){
    //         result++
    //     }
    //     if(another % 1 === 0 && another !== i && max % another === 0){
    //         result++
    //     }
    // }

    // version2:
    for(let i = 1; i <= small; i++){
        if(small % i === 0 && max % i === 0)    result++
    }

    return result
};


// console.log(commonFactors(12, 6))
console.log(commonFactors(25, 30))
// console.log(commonFactors(16, 774))
