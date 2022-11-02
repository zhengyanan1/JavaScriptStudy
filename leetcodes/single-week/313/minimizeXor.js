/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
 var minimizeXor = function(num1, num2) {
    let str1 = num1.toString(2)
    let str2 = num2.toString(2)
    let chars = str1.split('').reverse()  // 从地位到高位
    console.log(str1, str2)

    let countTarget = countOne(str1)
    let countHave = countOne(str2)

    if(countHave < countTarget){
        let diff = countTarget - countHave
        while(diff > 0){
            for(let i = 0; i < chars.length; i++){
                if(chars[i] === '1'){
                    chars[i] = '0'

                    diff--
                    break
                }
            }
        }

        return parseInt(chars.reverse().join(''), 2)
    }
    else if(countHave === countTarget){
        return num1
    }
    else{
        let diff = countHave - countTarget
        while(diff > 0){
            if(chars.every(v => v === '1')){
                chars.push('1')
            }
            else{
                for(let i = 0; i < chars.length; i++){
                    if(chars[i] === '0'){
                        chars[i] = '1'
                        break
                    }
                }
            }

            diff--
        }
        return parseInt(chars.reverse().join(''), 2)
    }

};

function countOne(str){
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] === '1')  count++
    }

    return count
}

console.log(minimizeXor(25, 72))