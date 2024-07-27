/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型一维数组
 */
export function FindNumsAppearOnce(nums: number[]): number[] {
    // write code here
    let value = 0;
    for(let num of nums){
        value ^= num;
    }
    
    let flag = 0;
    for(let i = 0; i < 32; i++){
        if(((1 << i) & value) !== 0){
            flag = 1 << i;
            break;
        }
    }

    let value1 = 0, value2 = 0;
    for(let num of nums){
        if((num & flag) !== 0){
            value1 ^= num;
        }
        else{
            value2 ^= num;
        }
    }

    if(value1 > value2)     return [value2, value1];
    return [value1, value2];
}

// console.log(FindNumsAppearOnce([1,4,1,6]));
// console.log(FindNumsAppearOnce([1,2,3,3,2,9]));
// console.log(FindNumsAppearOnce([3, 6]));


