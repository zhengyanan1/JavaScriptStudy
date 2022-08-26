function Add(num1, num2)
{
    let small = (num1 & num2)<< 1
    let big = num1 ^ num2

    while(small){
        small = (small & big) << 1
        big = small ^ big
    }

    return big
}
module.exports = {
    Add : Add
};