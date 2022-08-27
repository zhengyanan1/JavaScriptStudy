function ReverseSentence(str)
{
    let chars = str.split('')
    reverseStr(chars, 0, chars.length - 1)
    
    let start = 0
    for(let i = 0; i < chars.length; i++){
        if(chars[i] === ' '){
            reverseStr(chars, start, i - 1)
            start = i + 1
        }
    }
    reverseStr(chars, start, chars.length - 1)
    return chars.join('')
}

function reverseStr(str, start, end){
    while(start < end){
        swap(str, start, end)
        start++
        end--
    }
}

function swap(str, left, right){
    let t = str[left]
    str[left] = str[right]
    str[right] = t
}

module.exports = {
    ReverseSentence : ReverseSentence
};
ReverseSentence("nowcoder. a am I")