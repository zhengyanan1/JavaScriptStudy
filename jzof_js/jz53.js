function GetNumberOfK(data, k)
{
    let start = FindLeftIndex(data, k)
    if(start < 0)   return 0

    let end = FindRightIndex(data, k)
    console.log(start, end)
    return end - start + 1
}


function FindLeftIndex(data, k){
    let start = 0, end = data.length - 1

    while(start < end){
        const mid =  Math.floor((start + end) / 2)

        if(data[mid] > k){
            end = mid - 1
        }
        else if(data[mid] === k){
            end = mid
        }
        else{
            start = mid + 1
        }
    }

    if(start === end && data[start] === k)   return start
    return -1
}

function FindRightIndex(data, k){
    let start = 0, end = data.length - 1

    while(start < end){
        const mid =  Math.floor((start + end + 1) / 2)

        if(data[mid] > k){
            end = mid - 1
        }
        else if(data[mid] === k){
            start = mid
        }
        else{
            start = mid + 1
        }
    }

    if(start === end && data[start] === k)   return start
    return -1
}

module.exports = {
    GetNumberOfK : GetNumberOfK
};

console.log(GetNumberOfK([3,3,3,3],4))