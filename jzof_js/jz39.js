// version1:
function MoreThanHalfNum_Solution(numbers)
{
    let counts = new Map();

    
   for(let i = 0; i < numbers.length; i++){
        let v = numbers[i]
        if(counts.has(v)){
            const newCount = counts.get(v) + 1
            counts.set(v, newCount)
            if(newCount > numbers.length / 2)   return v
        }
        else{
            counts.set(v, 1)
            if(1 > numbers.length / 2)   return v
        }
    }

    return -1
}

function MoreThanHalfNum_Solution(numbers){
    let count = 0, value = -1
    for(let i = 0; i < numbers.length; i++){
        if(count == 0){
            value = numbers[i]
            count = 1
        }
        else if(numbers[i] == value){
            count++
        }
        else{
            count--
        }
    }

    return value
}

module.exports = {
    MoreThanHalfNum_Solution : MoreThanHalfNum_Solution
};