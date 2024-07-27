/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num int整型一维数组 
 * @param size int整型 
 * @return int整型一维数组
 */

// 单调队列
export function maxInWindows(nums: number[], size: number): number[] {
    // write code here

    if(size > nums.length || size === 0)    return [];

    const maxWindow:number[] = [];  // maxValue for index
    const result =[];

    for(let index = 0; index < nums.length; index++){
        const value = nums[index];
        while(maxWindow.length > 0 && nums[maxWindow[maxWindow.length - 1]] <= value){
            maxWindow.pop();
        }
        maxWindow.push(index);

        if(maxWindow[0] < index - size + 1){
            maxWindow.shift();
        }

        if(index >= size - 1){
            result.push(nums[maxWindow[0]]);
        }
    }

    return result;
}

console.log(maxInWindows([2,3,4,2,6,2,5,1],3));
console.log(maxInWindows([9,10,9,-7,-3,8,2,-6],5));
console.log(maxInWindows([1,2,3,4],5));

