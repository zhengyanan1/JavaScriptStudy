/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pushV int整型一维数组 
 * @param popV int整型一维数组 
 * @return bool布尔型
 */

export function IsPopOrder(pushV: number[], popV: number[]): boolean {
    // write code here
    const stack = [];
    let p1 = 0, p2 = 0, LEN = pushV.length;

    while(p1 <= LEN && p2 < LEN){
        
        if(stack.length === 0 || stack[stack.length - 1] !== popV[p2]){
            stack.push(pushV[p1++]);
        }
        else{  //匹配上了
            stack.pop();
            p2++;
        }
    }
    return stack.length === 0;
}

console.log(IsPopOrder([1,2,3,4,5],[4,3,5,1,2]));
