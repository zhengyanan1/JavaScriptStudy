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
function Power2(base, exponent){
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


// version 3:
function Power3(base, exponent){
    if(base === 0)        return 0
    if(exponent === 0 )   return 1

    if(exponent < 0){
        exponent = -exponent
        base = 1 / base
    }
    
    let sum = 1
    let current = base
    while(exponent > 0){
        if(exponent % 2 == 1){
            sum *= current
        }
        exponent = Math.floor(exponent / 2)
        current *= current 
    }
    return sum
}


module.exports = {
    Power : Power
};

console.warn(Power3(2.000, 3))