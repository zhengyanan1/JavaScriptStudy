let inStack = []
let outStack = []

function push(node)
{
    inStack.push(node)
}
function pop()
{
    if(outStack.length > 0) outStack.pop()

    while(inStack.length > 0){
        const current = inStack.pop()
        outStack.push(current)
    }
    return outStack.pop()
}
module.exports = {
    push : push,
    pop : pop
};