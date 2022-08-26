function IsContinuous(numbers)
{
    let counts = new Array(14).fill(0)

    for(let i = 0; i < numbers.length; i++){
        counts[numbers[i]]++
    }

    let leftStart = -1
    for(let i = 1; i < counts.length; i++){
        if(counts[i] > 0){
            leftStart = i
            break
        }
    }

    let len = 0
    for(let i = leftStart; i < counts.length; i++){
        if(counts[i] > 1)   return false

        if(counts[i] > 0){
            len++;
        }
        else if(counts[0] > 0){ // counts[i] == 0
            counts[0]--
            len++
        }
        else{  // counts[0] = 0
            return false
        }

        if(len === 5)   return true
    }

    return true
}
module.exports = {
    IsContinuous : IsContinuous
};