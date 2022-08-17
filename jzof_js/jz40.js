function GetLeastNumbers_Solution(input, k)
{
    if(k === 0) return []

    let result = new Array(k).fill(Number.MAX_VALUE)

    for(let i = 0; i < input.length; i++){
        insertIntoResult(input[i])
    }

    return result
}

/**
 * 
 * @param {*} num number
 * @param {*} result number[]
 */
function insertIntoResult(num, result){
    if(num >= result[result.length - 1])    return

    let i
    for(i = result.length - 2; i >= 0; i--){
        if(num < result[i]) result[i+1] = result[i]
        else                break   
        
    }
    result[i + 1] = num
}

module.exports = {
    GetLeastNumbers_Solution : GetLeastNumbers_Solution
};