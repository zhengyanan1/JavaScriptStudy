
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param base double浮点型 
 * @param exponent int整型 
 * @return double浮点型
 */
export function Power(base: number, exponent: number): number {
    // write code here
    let result = 1;
    let currentBase = base;

    let isPositive = true;
    if(exponent < 0){
        isPositive = false;
        exponent = -exponent;
    }

    while(exponent > 0){
        if(exponent % 2 === 1){
            result *= currentBase
        }

        currentBase *= currentBase;
        exponent = Math.floor(exponent / 2);
    }



    return isPositive ? result: 1 / result;
}

console.log(Power(2.0, 3));
console.log(Power(2.1, 3));
console.log(Power(2.0, -2));



