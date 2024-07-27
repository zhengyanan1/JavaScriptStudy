/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
//version1: 2个辅助数组
export function reOrderArray(array: number[]): number[] {
    // write code here
    const odd = [], even = [];

    for(let num of array){
        if((num & 1) === 1){
            odd.push(num);
        }
        else{
            even.push(num);
        }
    }

    return odd.concat(even);
}


function swap(array: number[], i: number, j: number){
    const t = array[i];
    array[i] = array[j];
    array[j] = t;
}
//version2:冒泡排序
export function reOrderArray2(array: number[]): number[] {
    // write code here
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j + 1 < array.length - i; j++){
            if(array[j] % 2 === 0 && array[j + 1] % 2 === 1){
                swap(array, j, j+1);
            }
        }
    }
    return array;
}

// version3: 双指针法，每次遇到奇数，奇数前的偶数，整体后移一位
export function reOrderArray3(array: number[]): number[] {
    // write code here
    let i = 0; //下一个奇数的位置(第一个偶数的位置)
    for(let j = 0; j < array.length; j++){
      if(array[j] % 2 === 0){
        continue;
      }
      else{ //后移（i~j-1）的元素
        const t = array[j];
        for(let k = j - 1; k >= i ; k--){
            array[k + 1] = array[k];
        }
        array[i] = t;
        i++;
      }
    }
    return array;
}

