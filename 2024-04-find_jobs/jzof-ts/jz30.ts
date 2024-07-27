/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param value int整型 
 * @return 无
 */

let normalStack: number[] = [];
let minStack: number[] = [];

export function push(value: number) {
    // write code here
    
    normalStack.push(value);

    if(minStack.length === 0){
        minStack.push(value);
    }
    else{
        const minTop = min();
        if(minTop <= value){
            minStack.push(minTop);
        }
        else{
            minStack.push(value);
        }
    }
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param 无 
 * @return 无
 */
export function pop() {
    // write code here
    
    normalStack.pop();
    minStack.pop();
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param 无 
 * @return int整型
 */
export function top(): number {
    // write code here
    
    return normalStack[normalStack.length - 1];
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param 无 
 * @return int整型
 */
export function min(): number {
    // write code here
    
    return minStack[minStack.length - 1];
}