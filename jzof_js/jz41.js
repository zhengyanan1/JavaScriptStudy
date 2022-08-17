let data = []
function Insert(num)
{
    // let start = 0, end = data.length - 1

    // while(start <= end){
    //     let mid = Math.floor((start + end) / 2)
    //     if(num >= data[mid]){
    //         start = mid + 1
    //     }
    //     else{
    //         end = mid - 1
    //     }
    // }

    // for(let i = data.length; i >= start + 1; i--)   data[i] = data[i - 1]    
    // data[start] = num

    let i;
    for(i = data.length - 1;i >= start; i--){
        if(data[i] > num)   data[i + 1] = data[i]
        else                break;
    }
    data[i + 1] = num
}
function GetMedian(){
	let len = data.length
    if(len % 2 === 0)   return (data[len / 2 - 1] + data[len / 2]) / 2
    return data[Math.floor(len / 2)]
}
module.exports = {
    Insert : Insert,
    GetMedian : GetMedian
};
