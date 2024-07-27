/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
export function minNumberInRotateArray(nums: number[]): number {
    // write code here
    if(nums.length === 1)   return nums[0];

    let start = 0, end = nums.length - 1;
    while(start < end){
        const midIndex = Math.floor((start + end) / 2);

        if(nums[midIndex] > nums[end]){
            start = midIndex + 1;
        } 
        else if(nums[midIndex] < nums[end]){
            end = midIndex
        }
        else{
            end = end - 1;
        }
    }


    return nums[start];
}
