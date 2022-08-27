const MOD = 1000000007
function InversePairs(data){
    let helper = [0]
    mergeSort(data, 0, data.length - 1, helper)
    return helper[0]
}

function mergeSort(data, start, end, helper){
    if(start < end){
        let mid = Math.floor((start + end) / 2)
        mergeSort(data, start, mid, helper)
        mergeSort(data, mid + 1, end, helper)

        merge(data, start, mid + 1, end, helper)
    }
}

function merge(data, leftStart, rightStart, end, helper){
    let left = []
    for(let i = leftStart; i < rightStart; i++){
        left.push(data[i])
    }
    let right = []
    for(let i = rightStart; i <= end; i++){
        right.push(data[i])
    }
    let p = leftStart, pl = 0, pr = 0
    while(pl < left.length && pr < right.length){
        if(left[pl] <= right[pr]){
            data[p++] = left[pl++]
        }
        else{
            helper[0] += left.length - pl + 1
            data[p++] = right[pr++]
        }
    }
    helper[0] %= MOD

    while(pl < left.length)     data[p++] = left[pl++]
    while(pr < right.length)    data[p++] = right[pr++]
}




// 1. 冒泡，超时
// function InversePairs(data)
// {
//     let count = 0

//     for(let i = 0; i < data.length; i++){
//         for(let j = 0; j + 1 < data.length - i; j++){
//             if(data[j] > data[j + 1]){
//                 let t = data[j]
//                 data[j] = data[j + 1]
//                 data[j + 1] = t
//                 count++
//             }
//         }
//         count = count % MOD
//     }

//     return count
// }


module.exports = {
    InversePairs : InversePairs
};

console.log(InversePairs(
    [1,2,3,4,5,6,7,0]))