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
 * 
 * @param pRoot TreeNode类 
 * @return bool布尔型
 */
export function IsBalanced_Solution(pRoot: TreeNode): boolean {
    // write code here
    const depth = isBalancedWithDepth(pRoot);
    return depth >= 0;
}

function isBalancedWithDepth(pRoot: TreeNode): number{ //如果是一颗平衡二叉树，就返回深度；不是就返回 -1
    if(!pRoot)  return 0;

    const leftDepth = isBalancedWithDepth(pRoot.left);
    const rightDepth = isBalancedWithDepth(pRoot.right);

    if(leftDepth === -1 || rightDepth === -1 || Math.abs(leftDepth - rightDepth) > 1){
        return -1;
    }

    return 1 + Math.max(leftDepth, rightDepth);
}
