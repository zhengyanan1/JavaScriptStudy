/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param n int整型 
 * @return int整型
 */
export function NumberOf1(n: number): number {

    let count = 0;
    for(let i = 0; i < 32; i++){
        count += (n & (1<<i)) === 0 ? 0 : 1;
    }

    return count;
}

export function NumberOf12(n: number): number {

    let count = 0;
    while(n !== 0){
        n &= n-1;
        count++;
    }

    return count;
}



console.log(NumberOf12(10));
console.log(NumberOf12(-1));

// let a = -1;
// console.log(1<<31)
// console.log(a & 1<<1)

