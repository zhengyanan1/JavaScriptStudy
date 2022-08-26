/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
 function FindNumsAppearOnce( array ) {
    let helper = new Set()

    for(let i = 0; i < array.length; i++){
        if(helper.has(array[i]))    helper.delete(array[i])
        else                        helper.add(array[i])
    }

    return [...helper].sort()
}

function FindNumsAppearOnce2( array ) {
    let helper = 0
    array.forEach((v) =>{
        helper = helper ^ v
    })

    let mask = 1
    while((mask & helper) == 0){
        mask = mask << 1
    }
    console.log(helper, mask)
    let a = 0, b = 0
    array.forEach((v)=>{
        if((v & mask) === 0){
            a = a ^ v
        }
        else{
            b = b ^ v
        }
    })

    if(a > b){
        let t = a
        a = b;
        b = t
    }

    return [a, b]
}

module.exports = {
    FindNumsAppearOnce : FindNumsAppearOnce
};

console.log(FindNumsAppearOnce2([3,6]))