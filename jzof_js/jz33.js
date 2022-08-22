function VerifySquenceOfBST(sequence)
{
    if(sequence.length === 0)   return false
    return VerifySquenceOfBSTInternal(sequence, 0, sequence.length - 1)
}

function VerifySquenceOfBSTInternal(sequence, startIndex, endIndex){ // [startIndex, endIndex]\
    if(startIndex >= endIndex)  return true

    let rootVal = sequence[endIndex];
    let i   //
    for(i = startIndex; i < endIndex; i++){
        if(sequence[i] > rootVal)   break
    }

    if(!allBiggerThanTarget(sequence, i, endIndex - 1, rootVal))    return false

    return VerifySquenceOfBSTInternal(sequence, startIndex, i - 1) && VerifySquenceOfBSTInternal(sequence, i, endIndex - 1)
}

function allBiggerThanTarget(sequence, start, end, target){
    // start > end => true
    for(let i = start; i <= end; i++){
        if(sequence[i] < target)    return false
    }
    return true
}


module.exports = {
    VerifySquenceOfBST : VerifySquenceOfBST
};

console.warn(VerifySquenceOfBST([1, 3, 2]))