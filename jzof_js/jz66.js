function multiply(array)
{
    let fowward = new Array(array.length).fill(1)
    fowward[-1] = 1
    fowward[0] = array[0]
    for(let i = 1; i < array.length; i++){
        fowward[i] = fowward[i - 1] * array[i]
    }

    let backward = new Array(array.length).fill(1)
    backward[array.length] = 1
    backward[array.length - 1] = array[array.length - 1]
    for(let i = array.length - 2; i >= 0; i--){
        backward[i] = backward[i + 1] * array[i]
    }

    let b = new Array(array.length)
    for(let i = 0; i < array.length; i++){
        b[i] = fowward[i - 1] * backward[i + 1]
    }
    return b
}
module.exports = {
    multiply : multiply
};