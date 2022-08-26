function FirstNotRepeatingChar(str)
{
    let counts = []
    for(let i = 0; i < str.length; i++){
        const cur = str[i]
        if(counts[cur]){
            counts[cur] = {
                count: 2,
                index: i
            }
        }
        else{
            counts[cur] = {
                count: 1,
                index: i
            }
        }
    }

    let minIndex = 100000
    const target = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0; i < target.length; i++){
        const cur = target[i]
        if(counts[cur] && counts[cur].count === 1){
            minIndex = Math.min(minIndex, counts[cur].index)
        }
    }
    if(minIndex === 100000) minIndex = -1

    return minIndex
}
module.exports = {
    FirstNotRepeatingChar : FirstNotRepeatingChar
};

