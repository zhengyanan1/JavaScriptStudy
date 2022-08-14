/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
 function reOrderArray( array ) {
    // version 1: bubble
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j + 1 < array.length - i; j++){
            const left = array[j], right = array[j + 1]
            if(left % 2 === 0 && right % 2 === 1){
                swap(array, j, j + 1)
            }
        }
    }

    return array
}

function swap(array, i , j){
    let t = array[i]
    array[i] = array[j]
    array[j] = t
}


module.exports = {
    reOrderArray : reOrderArray
};