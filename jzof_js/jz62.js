function LastRemaining_Solution(n, m)
{
    let helper = new Array(n).fill(undefined).map((v, index)=>{ return index})

    let current = 0
    while(helper.length > 1){
        let p = 0
        let len = helper.length
        while(p < m - 1){
            p++
            current++
        }
        current = current % len

        helper.splice(current, 1)
    
        if(current >= helper.length)    current = 0
    }

    return helper[0]
}
module.exports = {
    LastRemaining_Solution : LastRemaining_Solution
};