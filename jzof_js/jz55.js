function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function TreeDepth(pRoot)
{
    if(pRoot == null)   return 0
    
    return 1 + Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right))
}
module.exports = {
    TreeDepth : TreeDepth
};