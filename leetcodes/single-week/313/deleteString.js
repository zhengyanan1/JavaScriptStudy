/**
 * @param {string} s
 * @return {number}
 */
 var deleteString = function(s) {
    let result = 0

    while(true){
        let haveCopy = false
        let i;
        for(i = Math.floor(s.length / 2); i >= 1; i--){
            if(s.substring(0, i) === s.substring(i, 2 * i)){
                haveCopy = true
                break;
            }
        }

        result++
        if(haveCopy)    s =  s.substring(i)
        else            break
    }

    return result
};

console.log(deleteString("abcabcdabc"))
console.log(deleteString("aaabaab"))
console.log(deleteString("aaaaa"))
