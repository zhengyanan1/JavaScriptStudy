
/**
 * @param numbers int整型一维数组 
 * @return int整型
 */
function duplicate( numbers ) {
    // write code here
    let counts = Array(numbers.length).fill(0)
    let result = -1
    for(let num of numbers){
        counts[num]++
        
        if(counts[num] > 1){
            result = num
            break
        }
    }

    return result
}


module.exports = {
    duplicate : duplicate
};

console.log(duplicate([0,1,2]))