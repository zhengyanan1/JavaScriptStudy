/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @param k int整型 
 * @return int整型
 */


function getDesirableIndex(nums: number[], k: number): number{
    let start = 0, end = nums.length - 1;
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        if(nums[mid] <= k){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return start;
}
// version2: 构造一个 target-0.5 和target+0.5, 找位置, 然后相减。
export function GetNumberOfK2(nums: number[], k: number): number {
    if(nums.length === 0)   return 0;
    const left = getDesirableIndex(nums, k - 0.5);
    const right = getDesirableIndex(nums, k + 0.5);

    return right - left;
}



// version1: 找到最左边的index和最右边的index，相减计算即可
export function GetNumberOfK(nums: number[], k: number): number {
    // write code here
    let left: number = -1;
    let right: number = -1;

    let start = 0, end = nums.length - 1;
    while(start < end){
        const mid = Math.floor((start + end) / 2);
        if(nums[mid] < k){
            start = mid + 1;
        }
        else if(nums[mid] === k){
            end = mid;
        }
        else{
            end = mid - 1;
        }
    }
    if(nums[start] === k) {
        left = start
    }
    if(left === -1) return 0;

    start = 0, end = nums.length - 1;
    while(start < end){
        const mid = Math.floor((start + end + 1) / 2);
        if(nums[mid] < k){
            start = mid + 1;
        }
        else if(nums[mid] === k){
            start = mid;
        }
        else{
            end = mid - 1;
        }
    }
    right = end;

    return right - left + 1;
}

// console.log(GetNumberOfK([1,2,3,3,3,3,4,5],3), GetNumberOfK2([1,2,3,3,3,3,4,5],3))
// console.log(GetNumberOfK([1,3,4,5],6), GetNumberOfK2([1,3,4,5],6))
console.log(GetNumberOfK([3,3,3,3],3),GetNumberOfK2([3,3,3,3],3))
// console.log(GetNumberOfK([],0),GetNumberOfK2([],0));




