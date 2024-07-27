/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param A int整型一维数组 
 * @return int整型一维数组
 */
export function multiply(A: number[]): number[] {
    // write code here
    const endA: number[] = [];
    const startA: number[] = [];

    endA[-1] = 1
    for(let i = 0; i < A.length; i++){
        endA[i] = endA[i - 1] *  A[i];
    }

    startA[A.length] = 1
    for(let i = A.length - 1; i >= 0; i--){
        startA[i] = A[i] * startA[i + 1];
    }

    const B: number[] = [];
    for(let i = 0; i < A.length; i++){
        B[i] = endA[i - 1] * startA[i + 1];
    }

    return B;
}

console.log(multiply([1,2,3,4,5]))
