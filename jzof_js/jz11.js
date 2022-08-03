function minNumberInRotateArray(rotateArray)
{
    let start = 0, end = rotateArray.length - 1
 
    while(start < end){
        const mid = Math.floor((start + end) / 2)

        if(rotateArray[mid] < rotateArray[end]){
            end = mid
        }
        else if(rotateArray[mid] === rotateArray[end]){
            end = end - 1
        }
        else{
            start = mid + 1
        }
    }

    return rotateArray[start]
}

module.exports = {
    minNumberInRotateArray : minNumberInRotateArray
};