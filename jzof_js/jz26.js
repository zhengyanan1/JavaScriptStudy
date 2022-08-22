function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

function HasSubtree(pRoot1, pRoot2)
{
    if(pRoot2 === null)     return false
    if(pRoot1 === null)     return false

    if(isContains(pRoot1, pRoot2))  return true
    return HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2)
}

// 2棵树都从根节点开始比较，看是否左边包含右边
function isContains(pRoot1, pRoot2){
    if(pRoot2 === null)     return true

    // pRoot2 is not null
    if(pRoot1 === null)     return false 

    if(pRoot1.val !== pRoot2.val)   return false
    return isContains(pRoot1.left, pRoot2.left) && isContains(pRoot1.right, pRoot2.right)
}

module.exports = {
    HasSubtree : HasSubtree
};