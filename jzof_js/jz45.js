function PrintMinNumber(numbers)
{
    let numsStr = numbers.map(v => `${v}`)
    numsStr.sort((a, b) =>{
        let s1 = a + b, s2 = b + a
        if(s1 < s2){
            return -1;
        }
        else if( s1 === s2){
            return 0
        }
        else{
            return 1
        }
    })

    return numsStr.join('')
}
module.exports = {
    PrintMinNumber : PrintMinNumber
};

console.log("32" > "321")