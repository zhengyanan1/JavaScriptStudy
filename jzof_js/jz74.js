function FindContinuousSequence(sum)
{
    let result = []

    let len = 2
    let extraSum = sumExtra(len)
    while(len + extraSum <= sum){
        let reminder = (sum - extraSum) % len

        if(reminder === 0){
            let one = [],base = (sum - extraSum) / len
            for(let i = 0; i < len; i++){
                one.push(base + i)
            }
            result.push(one)
        }

        len++
        extraSum = sumExtra(len)
    }


    return result.reverse()
}

function sumExtra(len){
    
    return (0 + len - 1) * len / 2
}
module.exports = {
    FindContinuousSequence : FindContinuousSequence
};