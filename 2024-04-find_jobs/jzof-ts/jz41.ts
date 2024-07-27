/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param num int整型 
 * @return 无
 */

let data: number[] = [];

export function Insert(num: number) {
    //v1: 直接插入法
    // let i = data.length - 1;
    // for(; i >= 0; i--){
    //     if(num < data[i]){
    //         data[i + 1] = data[i];
    //     }else{
    //         break;
    //     }
    // }
    // data[i + 1] = num;

    // v2: 二分查找位置
    let start = 0, end = data.length - 1;
    while(start <= end){
        const mid = Math.floor((start + end) / 2);
        if(num < data[mid]){
            end = mid - 1;
        }else if(num === data[mid]){
            start = mid;
            break;
        }else{
            start = mid + 1;
        }
    }
    //start is the position of num
    for(let i = data.length; i > start; i--)   data[i] = data[i - 1];
    data[start] = num;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param 无 
 * @return double浮点型
 */
export function GetMedian(): number {
    // write code here
    const len = data.length;
    if((len & 1) === 1){
        return data[Math.floor(len / 2)];
    }

    return (data[len / 2 - 1] + data[len / 2]) / 2;
}

Insert(5);
console.log(GetMedian());
Insert(2);
console.log(GetMedian());
Insert(3);
console.log(GetMedian());
Insert(4);
console.log(GetMedian());
Insert(1);
console.log(GetMedian());
Insert(6);
console.log(GetMedian());