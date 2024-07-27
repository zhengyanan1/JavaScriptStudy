/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return string字符串
 */
export function PrintMinNumber(numbers: number[]): string {
    // write code here
    if(!numbers || numbers.length === 0)    return "";
    
    numbers.sort((a, b)=>{
        const aStr = `${a}`;
        const bStr = `${b}`;

        return (aStr + bStr).localeCompare(bStr + aStr);
    })
    return numbers.join('');
}

console.log(PrintMinNumber([321, 3, 32]));
