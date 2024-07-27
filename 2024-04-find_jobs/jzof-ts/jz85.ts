/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */
export function FindGreatestSumOfSubArray(array: number[]): number[] {
    // write code here
    
    const dp : number[] = []; //以index结尾的最大和
    const startIndexs:number[] = []; //以index结尾的起点index
    dp[0] = array[0];
    startIndexs[0] = 0;

    let maxSum = dp[0];
    let endIndexForMaxSum = 0;

    for(let i = 1; i < array.length; i++){
        
        if(dp[i - 1] >= 0){
            dp[i] = array[i] + dp[i - 1];
            startIndexs[i] = startIndexs[i - 1];
        }
        else{
            dp[i] = array[i];
            startIndexs[i] = i;
        }

        if(dp[i] >= maxSum){
            maxSum = dp[i];
            endIndexForMaxSum = i;
        }
    }

    return array.slice( startIndexs[endIndexForMaxSum], endIndexForMaxSum + 1);
}

console.log(FindGreatestSumOfSubArray([1,-2,3,10,-4,7,2,-5]));
console.log(FindGreatestSumOfSubArray([1]));
console.log(FindGreatestSumOfSubArray([1,2,-3,4,-1,1,-3,2]));
console.log(FindGreatestSumOfSubArray([-2,-1]));

