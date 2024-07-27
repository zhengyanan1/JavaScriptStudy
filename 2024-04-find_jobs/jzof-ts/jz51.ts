/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param nums int整型一维数组 
 * @return int整型
 */
// version2: 归并排序
const MOD = 1000000007;
let result = 0;
export function InversePairs(nums: number[]): number {
    result = 0;
    MergeSort(nums, 0, nums.length - 1);
    result %= MOD;
    return result;
}

function MergeSort(nums:number[], start: number, end: number){
    if(start < end){
        const mid = Math.floor((start + end) / 2);
        MergeSort(nums, start, mid);
        MergeSort(nums, mid + 1, end);

        merge(nums, start, mid, end);
    }
}

function merge(nums: number[], start: number, mid:number, end: number){
    const left = nums.slice(start, mid + 1);
    const right = nums.slice(mid + 1, end + 1);

    let p = start, pLeft = 0, pRight = 0;

    while(pLeft < left.length && pRight < right.length){
        if(left[pLeft] <= right[pRight]){
            nums[p++] = left[pLeft++];
        }
        else{
            result += left.length - pLeft;
            nums[p++] = right[pRight++];
        }
    }
    result %= MOD;

    while(pLeft < left.length){
        nums[p++] = left[pLeft++];
    }
    while(pRight < right.length){
        nums[p++] = right[pRight++];
    }
}




// version1: 冒泡， 超时，时间复杂度O(n^2)
function swap(nums: number[], left: number, right:number):void{
    const t = nums[left];
    nums[left] = nums[right];
    nums[right] = t;
}
export function InversePairs1(nums: number[]): number {
    // write code here
    
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        for( let j = 0; j + 1 < nums.length - i; j++){
            if(nums[j] > nums[j + 1]){
                swap(nums, j, j + 1);
                result++;
            }
        }
    }

    return result;
}

console.log(InversePairs([1,2,3,4,5,6,7,0]));
// console.log(InversePairs([1,2,3]));


