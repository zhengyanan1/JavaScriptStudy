
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param n int整型 
 * @return int整型
 */
export function NumberOf1Between1AndN_Solution(n: number): number {
    // write code here
    const str = n.toString();

    let count = 0;

    for(let i = 0; i < str.length; i++){
        const cur = parseInt(str.charAt(i));
        
        const left = str.substring(0, i);
        const numLeft = parseInt(left) || 0;
        const right = str.substring(i + 1);
        const numRight = parseInt(right) || 0;

        if(cur === 0){
            count += numLeft * Math.pow(10, right.length);
        }else if(cur === 1){
            count += numRight + 1; 
            count += numLeft * Math.pow(10, right.length);
        }else{
            count += (numLeft + 1) * Math.pow(10, right.length);
        }
    }

    return count;
}
// console.log(NumberOf1Between1AndN_Solution(13));
// console.log(NumberOf1Between1AndN_Solution(0));
console.log('==>', NumberOf1Between1AndN_Solution(10));

