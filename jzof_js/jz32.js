function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function PrintFromTopToBottom(root)
{
    if(root === null)   return []

    let result = []
    let queue = []
    queue.push(root)

    while(queue.length > 0){
        let current = queue.shift()
        result.push(current.val)

        if(current.left)    queue.push(current.left)
        if(current.right)   queue.push(current.right)
    }

}
module.exports = {
    PrintFromTopToBottom : PrintFromTopToBottom
};