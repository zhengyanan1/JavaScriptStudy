function GetUglyNumber_Solution(index)
{
    if(index === 0) return 0
    let uglyNums = []
    uglyNums[0] = 1
    let p2 = 0, p3 = 0, p5 = 0

    for(let i = 1; i < index; i++){
        while(2 * uglyNums[p2] <= uglyNums[i - 1])  p2++;
        while(3 * uglyNums[p3] <= uglyNums[i - 1])  p3++;
        while(5 * uglyNums[p5] <= uglyNums[i - 1])  p5++;

        const next = Math.min(2 * uglyNums[p2], 3 *uglyNums[p3], 5* uglyNums[p5]);
        
        uglyNums[i] = next
        if(next === 2 * uglyNums[p2]){
            p2++
        }
        else if(next === 3* uglyNums[p3]){
            p3++
        }
        else{
            p5++
        }
    }
    return uglyNums[index - 1]
}
module.exports = {
    GetUglyNumber_Solution : GetUglyNumber_Solution
};

console.log(GetUglyNumber_Solution(7))