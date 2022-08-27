function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function IsBalanced_Solution(pRoot)
{
    if(pRoot == null)   return true

    let leftDepth = getDepth(pRoot.left)
    let rightDepth = getDepth(pRoot.right)
    const isDifferLessThan1 = Math.abs(leftDepth - rightDepth) <= 1

    return isDifferLessThan1 && IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right)
}

function getDepth(pRoot){
    if(pRoot == null)   return 0
    return 1 + Math.max(getDepth(pRoot.left), getDepth(pRoot.right))
}

module.exports = {
    IsBalanced_Solution : IsBalanced_Solution
};