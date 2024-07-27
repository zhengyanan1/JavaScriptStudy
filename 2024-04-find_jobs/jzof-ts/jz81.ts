/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
export function reOrderArrayTwo(array: number[]): number[] {
    // write code here
    let left = 0;  //下标最小的偶数
    let right = array.length - 1; //下标最大的奇数
    while(left < right){
        while(array[left] % 2 === 1){
            left++;
        }
        while(array[right] % 2 === 0){
            right--;
        }

        
        if(left < right){
            let t = array[left];
            array[left] = array[right];
            array[right] = t;
        }
    }
    
    return array;
}

console.log('===', reOrderArrayTwo([1,2,3,4]));
console.log(reOrderArrayTwo([1,3,5,6,7]));
console.log(reOrderArrayTwo([1,4,4,3]));
