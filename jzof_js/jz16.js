// version1:
function Power(base, exponent)
{
    if(base === 0)        return 0
    if(exponent === 0 )   return 1

    let isPositive = true
    if(exponent < 0){
        isPositive = false
        exponent = - exponent
    }

    let sum = 1
    for(let i = 0; i < exponent; i++){
        sum *= base
    }

    return isPositive ? sum : 1 / sum
}

// version2:
function Power(base, exponent){
    if(base === 0)        return 0
    if(exponent === 0 )   return 1

    let isPositive = true
    if(exponent < 0){
        isPositive = false
        exponent = - exponent
    }

    let helper = [1, base]
    let i;
    for(i = 2; i <= exponent; i *= 2){
        helper[i] = helper[i / 2] * helper[i / 2]
    }

    let total = exponent;
    let sum = 1
    for(; i >= 1; i /= 2){
        if(total >= i){
            total -= i;
            sum *= helper[i]
        }
    }

    return isPositive ? sum : 1 / sum
}


module.exports = {
    Power : Power
};