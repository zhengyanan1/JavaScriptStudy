/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param numbers int整型一维数组 
 * @return int整型
 */
export function duplicate(numbers: number[]): number {
  // write code here
  const count: number[] = Array(numbers.length).fill(0);

  for(let i = 0; i < numbers.length; i++){
    const cur = numbers[i];
    count[cur]++;

    if(count[cur] > 1) return cur;
  }

  return -1;
}

console.log(duplicate([2,3,1,0,2,5,3]));