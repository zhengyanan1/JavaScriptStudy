/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @param m int整型 
 * @return int整型
 */
// version2: 优化版，通过操作数组，直接获取每轮要删除的index
export function LastRemaining_Solution2(n: number, m: number): number {
    // write code here
    let nums: number[] = [];
    for(let i = 0; i < n; i++){
        nums[i] = i;
    }

    let len = nums.length;
    while(len > 1){
        let deleteIndex;
        if(m <= len){
            deleteIndex = m - 1
        }
        else{
            deleteIndex = m % len - 1;
            if(deleteIndex < 0) deleteIndex += len;
        }

        nums = [...nums.slice(deleteIndex + 1), ...nums.slice(0, deleteIndex)]
        len = nums.length;
    }

    return nums[0];
}



// version1:模拟法
export function LastRemaining_Solution(n: number, m: number): number {
    // write code here
    const nums: number[] = [];
    for(let i = 0; i < n; i++){
        nums[i] = i;
    }

    let len = nums.length;
    let currentIndex = len - 1;
    let currentRound = 0;
    while(len > 1){
        currentIndex++;
        currentIndex %= len;
        currentRound++;


        if(currentRound === m){
            nums.splice(currentIndex, 1);

            currentIndex--;
            currentRound = 0;
        }

        len = nums.length;
    }

    return nums[0];
}

console.log(LastRemaining_Solution(5, 3), LastRemaining_Solution2(5, 3));
console.log(LastRemaining_Solution(2, 3), LastRemaining_Solution2(2, 3));
console.log(LastRemaining_Solution(6, 6), LastRemaining_Solution2(6, 6));


