function Fibonacci(n)
{
    if(n == 1)      return 1
    else if(n == 2)  return 1
    let pre = 1, cur = 1, next = -1
    for(let i = 3; i <= n; i++){
        next = pre + cur

        pre = cur
        cur = next
    }

    return next
}
module.exports = {
    Fibonacci : Fibonacci
};