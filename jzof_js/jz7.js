function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function reConstructBinaryTree(pre, vin)
{
    // write code here
    let start = 0, end = pre.length - 1
    return reConstructBinaryTreeCore(pre, start, end, vin, start, end)
}

function reConstructBinaryTreeCore(pre, preStart, preEnd, vin, vinStart, vinEnd){
    if(preStart > preEnd || vinStart > vinEnd)  return null

    let headVal = pre[preStart]
    let headIndexInVin = findIndex(headVal, vin, vinStart, vinEnd)
    let leftTreeSize = headIndexInVin - vinStart

    let currentHead = new TreeNode(pre[preStart])
    currentHead.left = reConstructBinaryTreeCore(pre, preStart + 1, preStart + leftTreeSize, vin, vinStart, headIndexInVin - 1)
    currentHead.right = reConstructBinaryTreeCore(pre, preStart + leftTreeSize + 1, preEnd, vin, headIndexInVin + 1, vinEnd)
    return currentHead
}

function findIndex(target, arr, arrStart, arrEnd){
    for(let i = arrStart; i <= arrEnd; i++){
        if(target == arr[i])    return i;
    }

    return -1;
}

module.exports = {
    reConstructBinaryTree : reConstructBinaryTree
};