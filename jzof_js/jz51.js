const MOD = 1000000007
function InversePairs(data)
{
    let count = 0

    for(let i = 0; i < data.length; i++){
        for(let j = 0; j + 1 < data.length - i; j++){
            if(data[j] > data[j + 1]){
                let t = data[j]
                data[j] = data[j + 1]
                data[j + 1] = t
                count++
            }
        }
        count = count % MOD
    }

    return count
}
module.exports = {
    InversePairs : InversePairs
};