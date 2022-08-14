function IsPopOrder(pushV, popV)
{
    let stack = []
    let i = 0, j = 0, len = pushV.length
    
    for(;;){
        if(stack.length === 0 || stack[stack.length - 1] !== popV[j]){
            if(i === len)   return false
            stack.push(pushV[i++])
        }
        else{
            stack.pop()
            j++;
            if(j === len)   return true
        }
    }
}
module.exports = {
    IsPopOrder : IsPopOrder
};
/*

[1,2,3,4,5],    [4,3,5,1,2] / [4,5,3,2,1]
*/