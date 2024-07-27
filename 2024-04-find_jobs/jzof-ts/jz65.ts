
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param num1 int整型 
 * @param num2 int整型 
 * @return int整型
 */
export function Add(num1: number, num2: number): number {
    // write code here
    let result, carry;
    while(carry !== 0){
        result = num1 ^ num2;       //没有进位的加法
        carry = (num1 & num2) << 1; // 进位

        num1 = result;
        num2 = carry
    }
    
    return result;
}

console.log(Add(1, 2));
console.log(Add(0, 0));

