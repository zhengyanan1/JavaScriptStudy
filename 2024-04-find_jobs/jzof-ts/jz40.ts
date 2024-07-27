/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param input int整型一维数组 
 * @param k int整型 
 * @return int整型一维数组
 */
export function GetLeastNumbers_Solution(input: number[], k: number): number[] {
    // write code here
    const kMin = new Array(k).fill(Number.MAX_SAFE_INTEGER);

    for(let cur of input){
        tryAddOne(kMin, cur);
    }

    return kMin;
}


function tryAddOne(kMin: number[], cur: number){
    let i = kMin.length - 1;
    for(; i >= 0; i--){
        if(cur < kMin[i]){
            kMin[i] = kMin[i - 1]
        }
        else{
            break;
        }
    }

    if(i + 1 < kMin.length){
        kMin[i + 1] = cur;
    }
}