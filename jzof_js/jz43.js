function NumberOf1Between1AndN_Solution(n)
{
    let count = 0

    let base = 1
    while(base <= n){
        let highNum = Math.floor(n / (10 * base))
        let currentDigit = getCurrentDigit(n, (10 *base))
        let lowNum = n % base
        let lowLen = Math.log10(base)

        count += highNum * Math.pow(10, lowLen)
        if(currentDigit > 1){
            count += Math.pow(10, lowLen)
        }
        else if(currentDigit === 1){
            count += lowNum + 1
        }
        
        base *= 10
    }

    return count
}

function getCurrentDigit(n, base){
    let currentDigit = n % base
    while(currentDigit >= 10){
        currentDigit = Math.floor(currentDigit / 10)
    }

    return currentDigit
}

function getLenOfNum(num){
    let count = 0
    while(num > 0){
        num = Math.floor(num / 10)
        count++
    }

    return count
}




module.exports = {
    NumberOf1Between1AndN_Solution : NumberOf1Between1AndN_Solution
};

console.log(NumberOf1Between1AndN_Solution(10000))