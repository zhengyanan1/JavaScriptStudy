function FindNumbersWithSum(array, sum)
{
    let start = 0, end = array.length - 1

    while(start < end){
        if(array[start] + array[end] === sum){
            return [array[start], array[end]]
        }
        else if(array[start] + array[end] > sum){
            end--
        }
        else{
            start++
        }
    }

    return []
}
module.exports = {
    FindNumbersWithSum : FindNumbersWithSum
};