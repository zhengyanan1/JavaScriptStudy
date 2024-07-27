/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return bool布尔型
 */

// version2: 优化版
export function IsContinuous2(numbers: number[]): boolean {
    // write code here
    const numsWithoutZero = numbers.filter(num => num !== 0);
    let zeroCount = numbers.length - numsWithoutZero.length;
    numsWithoutZero.sort((a, b) => a-b);

    let requireZeroCount = 0;
    for(let i = 1; i < numsWithoutZero.length; i++){
        if(numsWithoutZero[i] === numsWithoutZero[i - 1]){
            return false;
        }
        requireZeroCount += numsWithoutZero[i] - numsWithoutZero[i - 1] - 1
    }

    return zeroCount >= requireZeroCount;
}



// version1: 模拟法
export function IsContinuous(numbers: number[]): boolean {
    // write code here
    const numsWithoutZero = numbers.filter(num => num !== 0);
    let zeroCount = numbers.length - numsWithoutZero.length;
    numsWithoutZero.sort((a, b) => a-b);

    let last = numsWithoutZero[0] - 1;
    for(let cur of numsWithoutZero){
        while(cur - last > 1){
            if(zeroCount > 0){
                zeroCount--;
                last++;
            }
            else{
                return false;
            }
        }

        if(cur === last){
            return false;
        }
        last = cur;
    }

    return true;
}

console.log(IsContinuous([0,3,2,6,4]), IsContinuous([0,3,2,6,4]));
console.log(IsContinuous([1,0,0,1,0]), IsContinuous([1,0,0,1,0]));
console.log(IsContinuous([13,12,11,0,1]), IsContinuous([13,12,11,0,1]));

