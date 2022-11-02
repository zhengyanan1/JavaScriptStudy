//version1
function getMemoryLength(arrs){
    arrs.sort((line1, line2) =>{
        return line1[0] - line2[0]
    })
    
    for( let i = 1; i < arrs.length; ){
        let pre = arrs[i - 1], cur = arrs[i]
        if(pre[1] >= cur[0]){
            pre[1] = Math.max(pre[1], cur[1])
            arrs.splice(i, 1)
        }
        else{
            i++
        }
    }

    let memoryLen = 0
    arrs.forEach((line)=>{
        memoryLen += line[1] - line[0]
    })

    return memoryLen
}

function getMemoryLength2(arrs){
    arrs.sort((line1, line2) =>{
        return line1[0] - line2[0]
    })
    
    for( let i = arrs.length - 1; i > 1; ){
        console.log(i)
        let before = arrs[i - 1], last = arrs[i]

        if(before[1] >= last[0]){
            last[0] = Math.min(last[0], before[0])
        }
        else{
            i--
        }
    }

    let memoryLen = 0
    arrs.forEach((line)=>{
        memoryLen += line[1] - line[0]
    })

    return memoryLen
}

const a = [
    [2,4],
    [10, 30], 
    [3, 7]
]
const b = [
    [2,4],
    [4, 6], 
    [3, 7]
]
// console.log(getMemoryLength2(a))
console.log(getMemoryLength2(b))


