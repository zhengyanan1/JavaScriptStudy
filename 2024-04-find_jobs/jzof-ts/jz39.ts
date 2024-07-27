/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return int整型
 */

//version1: hash法
export function MoreThanHalfNum_Solution(numbers: number[]): number {
    // write code here
    const count: number[] = [];
    for(const num of numbers){
        if(count[num]){
            count[num]++;
        }else{
            count[num] = 1;
        }
    }
    for(let i = 0; i < 10000; i++){
        if(count[i] > numbers.length / 2) return i;
    }

    return -1;
}

// version2: 消除法
export function MoreThanHalfNum_Solution2(numbers: number[]): number {
    // write code here
    let current = -1, count = 0;
    for(const num of numbers){
        if(count === 0){
            current = num;
            count = 1;
        }
        else if(num === current){
            count++;
        }
        else{
            count--;
        }
    }

    return current;
}
