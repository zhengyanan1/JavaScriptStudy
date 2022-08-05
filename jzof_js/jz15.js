// version1:
function NumberOf1(n)
{
    if(n === -2147483648)    return 1
    if(n > 0){
        let result = n.toString(2)
        return result.split('').filter( x => parseInt(x) === 1).length
    }
    else{
        n = -n
        let result1 = n.toString(2)
        let result2 = result1.split('').map((v) => 1 - parseInt(v)).reverse()  // 地位从0开始

        while(result2.length < 32)  result2.push(1)

        let current = 1
        for(let i = 0; i < result2.length; i++){
            current = current + result2[i]

            if(current < 2){
                result2[i] = current
                current = 0
                break;
            }
            else{//current = 2
                result2[i] = 0
                current = 1
            }
        }

        return result2.filter(x => x === 1).length
    }
}

// version2:
function NumberOf1(n){
    let count = 0
    for(let i = 0; i < 32; i++){
        if((n & (1 << i)) != 0)   count++
    }
    return count
}
module.exports = {
    NumberOf1 : NumberOf1
};

console.log(NumberOf1(1))