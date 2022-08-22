let stack = []
let stackMinHelper = []
function push(node)
{
    stack.push(node)

    if(stackMinHelper.length === 0)                          stackMinHelper.push(node)
    else if(node <= stackMinHelper[stackMinHelper.length - 1])    stackMinHelper.push(node)
    else                                                stackMinHelper.push(stackMinHelper[stackMinHelper.length - 1])
}
function pop()
{
    stackMinHelper.pop()
    return stack.pop()
}
function top()
{
    return stack[stack.length - 1]
}
function min()
{
    return stackMinHelper[stackMinHelper.length - 1]
}
module.exports = {
    push : push,
    pop : pop,
    top : top,
    min : min
};