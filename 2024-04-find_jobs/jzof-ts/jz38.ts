/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param str string字符串 
 * @return string字符串一维数组
 */
export function Permutation(str: string): string[] {
    // write code here

    const result = new Set<string>();
    const visited: boolean[] = new Array(str.length).fill(false);
    const curStr = "";
    travel(str, 0, visited, curStr, result);
    
    const realResult = []
    result.forEach((item)=>{
        realResult.push(item);
    })

    return realResult;
}

function travel(source: string, curIndex: number, visited: boolean[], curStr: string, result: Set<string>){
    if(curIndex == source.length){
        result.add(curStr);
        return;
    }

    for(let i = 0; i < source.length; i++){
        if(!visited[i]){
            visited[i] = true;
            travel(source, curIndex + 1, visited, curStr + source.charAt(i), result);
            visited[i] = false;
        }
    }
}

console.log(Permutation('abb'));

