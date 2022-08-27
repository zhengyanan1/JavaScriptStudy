const MOD = 998244353
function cutRope(num)
{
    if(num === 2)    return 1
    if(num === 3)    return 2
    if(num === 4)    return 4

    let count3 = Math.floor(num / 3)
    let extra = num % 3
    if(extra === 1)        return fastMul(cutPow(3, count3 - 1), 4)
    else if(extra === 2)    return fastMul(cutPow(3, count3), 2)
    else                    return cutPow(3, count3)

}

function fastMul(x, y){
    let res = 0
    x %= MOD
    y %= MOD
    while(y != 0){
        if(y % 2 === 1){
            res += x
            res %= MOD
        }
        y = Math.floor(y / 2)
        x = 2 * x
        
        x %= MOD
    }
    return res
}

function cutPow(x, y){
    let result = 1
    
    let base = x
    while(y > 0){
        if( y % 2 === 1){
            result = fastMul(result, base)
        }

        base = fastMul(base, base)
        y = Math.floor( y / 2)
    }

    return result
}

module.exports = {
    cutRope : cutRope
};