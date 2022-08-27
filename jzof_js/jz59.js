function maxInWindows(num, size){
    let queue = []
    let result = []
    for(let i = 0; i < num.length; i++){
        
        if(queue.length === 0){
            queue.push(i)
        }
        else{
            while(queue.length > 0 && num[queue[queue.length - 1]] <= num[i])    queue.pop()
            queue.push(i)
        }

        while(queue[0] <= i - size)   queue.shift()   //清理过期的最大值

        if(i >= size - 1){
            result.push(num[queue[0]])
        }
    }

    return result
}


// function maxInWindows(num, size)
// {
//     let result = []
//     for(let i = 0; i + size - 1 < num.length; i++){
//         result.push(findMax(num, i, i + size - 1))
//     }

//     return result
// }

// function findMax(num, start, end){
//     let max = num[start]
//     for(let i = start + 1; i <= end; i++){
//         max = Math.max(max, num[i])
//     }

//     return max
// }
module.exports = {
    maxInWindows : maxInWindows
};