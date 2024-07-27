
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param array int整型一维数组 
 * @param sum int整型 
 * @return int整型一维数组
 */
export function FindNumbersWithSum(array: number[], sum: number): number[] {
    // write code here
    let left = 0, right = array.length - 1;

    while(left < right){
        const curSum = array[left] + array[right];
        if(curSum > sum){
            right--;
        }
        else if(curSum === sum){
            return [array[left], array[right]];
        }
        else{
            left++;
        }
    }

    return []
}
