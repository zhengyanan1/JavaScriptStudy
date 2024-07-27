/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param number long长整型 
 * @return long长整型
 */
const MOD = 998244353;
function safeMul(x: number, y: number): number{
    let res = 0;
    x %= MOD;
    y %= MOD;
    while(y != 0){
        if((y & 1) === 1){
            res += x;
            res %= MOD;
        }

        y = Math.floor( y / 2);
        x *= 2;
        x %= MOD;
    }

    return res;
}

function safePow(base: number, count: number): number{
    let res = 1;
    while(count > 0){
        if((count & 1) === 1){
            res = safeMul(res, base);
        }
        base = safeMul(base, base);
        count = Math.floor(count / 2);
    }

    return res;
}


export function cutRope(number: number): number {
    // write code here
    if(number === 2)    return 1;
    if(number === 3)    return 2;
    if(number === 4)    return 4;


    let numsOf3 = Math.floor(number / 3);
    const extra = number % 3;
    if(extra === 0){
        return safePow(3, numsOf3);
    }else if(extra === 1){
        return safeMul(safePow(3, numsOf3 - 1), 4);
    }else{
        return safeMul(safePow(3, numsOf3), 2);
    }
}

// console.log(cutRope(4));
// console.log(cutRope(5));
console.log(cutRope(874520));

