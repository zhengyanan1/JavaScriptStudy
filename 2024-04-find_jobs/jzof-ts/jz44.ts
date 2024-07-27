/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return int整型
 */
export function findNthDigit(n: number): number {
    // write code here
    let digit = 1;

    let currentRange = (Math.pow(10, digit) - Math.pow(10, digit - 1)) * digit;
    while(n > currentRange){

        n -= currentRange;
        digit++;
        currentRange = (Math.pow(10, digit) - Math.pow(10, digit - 1)) * digit;
    }

    const rank = Math.floor(n / digit);
    const extra = n % digit;

    const targetValue = Math.pow(10, digit - 1) + rank - 1;

    if(extra === 0){
        return targetValue % 10;
    }
    else{
        return parseInt((targetValue + 1).toString().charAt(extra - 1));
    }
}

const testcases = [0, 2, 10, 13];
testcases.forEach(num =>{
    console.log(findNthDigit(num));

});


