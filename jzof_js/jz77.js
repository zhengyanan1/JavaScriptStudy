function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function Print(pRoot)
{
    if(pRoot == null)   return []

    let result = []
    let workQueue = [], backgroundQueue = []
    workQueue.push(pRoot)

    while(workQueue.length > 0){
        let one = []
        while(workQueue.length > 0){
            let current = workQueue.shift()
            one.push(current.val)

            if(current.left)        backgroundQueue.push(current.left)
            if(current.right)       backgroundQueue.push(current.right)
        }
        result.push(one)

        let t = workQueue
        workQueue = backgroundQueue
        backgroundQueue = t
    }
    result.forEach((v, index, array)=>{
        if(index % 2 === 1){
            array[index] = array[index].reverse()
        }
    })

    return result
}

function swap(a, b){
    let t = a;
    a = b;
    b = a
}
module.exports = {
    Print : Print
};