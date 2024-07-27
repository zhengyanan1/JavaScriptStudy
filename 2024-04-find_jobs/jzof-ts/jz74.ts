/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param sum int整型 
 * @return int整型二维数组
 */
export function FindContinuousSequence(sum: number): number[][] {
    // write code here
    const results: number[][] = []

    for(let i = 2; i <= sum ;i++){
        const extra = (i - 1) * i / 2;

        const mode = (sum - extra) % i;
        const base = (sum - extra) / i;
        if(mode === 0 && base > 0){
            const result: number[] = [];
            for(let j = 0; j < i; j++){
                result.push(base + j);
            }
            
            results.push(result);
        }
    }
    return results.reverse();
}

console.log(FindContinuousSequence(9));
console.log(FindContinuousSequence(0));
console.log(FindContinuousSequence(3));


