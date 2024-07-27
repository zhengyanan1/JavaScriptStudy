 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param pRoot1 TreeNode类 
 * @param pRoot2 TreeNode类 
 * @return bool布尔型
 */
export function HasSubtree(pRoot1: TreeNode, pRoot2: TreeNode): boolean {
    if(pRoot2 == null)  return false;
    if(pRoot1 == null)  return false;
    
    return isSameStructure(pRoot1, pRoot2) || HasSubtree(pRoot1.left, pRoot2) || HasSubtree(pRoot1.right, pRoot2);
}


function isSameStructure(pRoot1: TreeNode, pRoot2: TreeNode): boolean{
    if(pRoot1 == pRoot2)    return true;

    if(pRoot1 == null){
        return false;
    }
    if(pRoot2 == null){
        return true;
    }

    if(pRoot1.val === pRoot2.val){
        return isSameStructure(pRoot1.left, pRoot2.left) && isSameStructure(pRoot1.right, pRoot2.right);
    }

    return false;
}
