/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param ch string字符串型 
 * @return 无
 */
// version1: set + 队列
// const firstQueue = [];
// const repeatSet = new Set<string>();


// export function Insert(ch: string) {
//     if(repeatSet.has(ch)){
//         return;
//     }

//     const existIndex = firstQueue.indexOf(ch);
//     if(existIndex === -1){
//         firstQueue.push(ch);
//     }else{
//         firstQueue.splice(existIndex, 1);
//         repeatSet.add(ch);
//     }
// }

// /**
//  * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
//  *
//  * 
//  * @param 无 
//  * @return string字符串型
//  */
// export function FirstAppearingOnce(): string {
//     // write code here
//     return firstQueue[0] || '#';
// }


// version2: map + 队列
const firstQueue = [];
const countMap = new Map<string, number>();

export function Insert(ch: string) {
    const count = countMap.get(ch) || 0;

    if(count === 0){
        firstQueue.push(ch);
    }

    countMap.set(ch, count + 1);
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param 无 
 * @return string字符串型
 */
export function FirstAppearingOnce(): string {
    while(firstQueue.length > 0){
        const cur = firstQueue[0];

        if(countMap.get(cur) === 1){
            return cur;
        }
        else{
            firstQueue.shift();
        }
    }

    return '#';
}

function testCase(str: string): void{
    while(firstQueue.length > 0){firstQueue.pop();}

    let result: string = '';

    for(let char of str){
        Insert(char);
        result += FirstAppearingOnce();
    }

    console.log(result);
}

testCase("googgle");
testCase("abcdee");
