/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param node int整型 
 * @return 无
 */
export function push(node: number) {
    // write code here
    stackIn.push(node);
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param 无 
 * @return int整型
 */
export function pop(): number {
    // write code here
    if(stackOut.length === 0){
        while(stackIn.length > 0){
            stackOut.push(stackIn.pop());
        }
    }

    if(stackOut.length > 0){
        return stackOut.pop();
    }

    return undefined;
}


let stackIn: number[] = []
let stackOut: number[] = [];