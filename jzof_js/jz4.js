/**
 * 
 * @param {int} target 
 * @param {int[][]} array 
 */
function Find(target, array)
{
    if(array.length == 0)   return false
    if(array[0].length == 0)    return false

    // write code here
    let rows = array.length
    let cols = array[0].length
    let curRow = rows - 1, curCol = 0;
    while(curRow >= 0 && curRow < rows && curCol >=0 && curCol < cols){
        let current = array[curRow][curCol]
        
        if(current < target)        curCol++
        else if(current > target)   curRow--
        else                        return true
    }

    return false
}
module.exports = {
    Find : Find
};

console.log(Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))
console.log(Find(1,[[2]]))
console.log(Find(3,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))
