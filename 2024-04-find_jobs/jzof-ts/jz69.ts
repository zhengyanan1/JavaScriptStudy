/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param number int整型 
 * @return int整型
 */
export function jumpFloor(num: number): number {
    // write code here

    const fn: number[] = [];
    fn[1] = 1
    fn[2] = 2;
    for(let i = 3; i <= num; i++){
        fn[i] = fn[i - 1] + fn[i - 2];
    }


    return fn[num];
}
