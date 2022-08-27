/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
 function reOrderArrayTwo( array ) {
    let left = 0, right = array.length - 1

    while(array[left] % 2 === 1 && left < array.length) left++
    while(array[right] % 2 === 0 && right >= 0)         right--

    while(left < right){
        swap(array, left++, right--)

        while(array[left] % 2 === 1 && left < array.length) left++
        while(array[right] % 2 === 0 && right >= 0)         right--
    }

    return array
}

function swap(array, left, right){
    let t = array[left]
    array[left] = array[right]
    array[right] = t
}
module.exports = {
    reOrderArrayTwo : reOrderArrayTwo
};