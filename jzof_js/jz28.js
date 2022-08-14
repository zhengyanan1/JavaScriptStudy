function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
function isSymmetrical(pRoot)
{
    if(pRoot === null)  return true
    return isSymmetry(pRoot.left, pRoot.right)
}

function isSymmetry(pRoot1, pRoot2){
    if(pRoot1 === null && pRoot2 === null)  return true
    if(pRoot1 === null || pRoot2 === null)  return false

    if(pRoot1.val !== pRoot2.val)   return false
    
    return isSymmetry(pRoot1.left, pRoot2.right) && isSymmetry(pRoot1.right, pRoot2.left)
}

module.exports = {
    isSymmetrical : isSymmetrical
};