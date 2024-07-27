
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param sequence int整型一维数组 
 * @return bool布尔型
 */
export function VerifySquenceOfBST(sequence: number[]): boolean {
    if(!sequence || sequence.length === 0)  return false;

    // write code here
    return VerifySquenceOfBSTInner(sequence, 0, sequence.length - 1);
}

function isThereASmaller(sequence: number[], startIndex:number, endIndex:number, target: number){
    for(let i = startIndex; i <= endIndex; i++){
        if(sequence[i] < target){
            return true;
        }
    }

    return false;
}

function VerifySquenceOfBSTInner(sequence: number[], startIndex:number, endIndex:number): boolean{
    if(startIndex >= endIndex)  return true;

    const root = sequence[endIndex];

    let i = startIndex;
    for(; i <= endIndex - 1; i++){
        if(sequence[i] > root) break;
    }

    if(isThereASmaller(sequence, i, endIndex - 1, root)){
        return false;
    }

    return VerifySquenceOfBSTInner(sequence, startIndex, i - 1) && VerifySquenceOfBSTInner(sequence, i, endIndex - 1);
}


console.log(VerifySquenceOfBST([1,3,2]))
console.log(VerifySquenceOfBST([3,1,2]))
console.log(VerifySquenceOfBST([5,7,6,9,11,10,8]))

