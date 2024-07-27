/*class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param preOrder int整型一维数组 
 * @param vinOrder int整型一维数组 
 * @return TreeNode类
 */

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

export function reConstructBinaryTree(preOrder: number[], vinOrder: number[]): TreeNode {
    // write code here
    if(preOrder.length === 0)   return null;


    const rootVal = preOrder[0];
    const rootIndex = vinOrder.indexOf(rootVal);
    const leftLen = rootIndex;
    // const rightLen = vinOrder.length - rootIndex - 1;

    const rootTreeNode = new TreeNode(rootVal);
    rootTreeNode.left = leftLen + 1 <= 1 ? null : reConstructBinaryTree(preOrder.slice(1, leftLen + 1), vinOrder.slice(0, leftLen));
    rootTreeNode.right = leftLen + 1 >= preOrder.length ? null : reConstructBinaryTree(preOrder.slice(leftLen + 1), vinOrder.slice(leftLen + 1));

    return rootTreeNode;
}

export function reConstructBinaryTree2(preOrder: number[], vinOrder: number[]): TreeNode {
    // write code here
    const len = preOrder.length;

    return reConstructBinaryTreeWithSub(preOrder, 0, len - 1, vinOrder, 0, len - 1);
}

function reConstructBinaryTreeWithSub(preOrder: number[], preStart:number, preEnd: number, vinOrder: number[], vinStart: number, vinEnd: number): TreeNode{
    if(preStart > preEnd || vinStart > vinEnd) return null;

    const rootVal = preOrder[preStart];
    const rootIndex = vinOrder.indexOf(rootVal, vinStart);
    const leftLen = rootIndex - vinStart;

    const rootTreeNode = new TreeNode(rootVal);
    rootTreeNode.left = reConstructBinaryTreeWithSub(preOrder, preStart + 1, preStart + leftLen, vinOrder, vinStart, vinStart + leftLen - 1);
    rootTreeNode.right = reConstructBinaryTreeWithSub(preOrder, preStart + leftLen + 1, preEnd, vinOrder, vinStart + leftLen + 1, vinEnd);
    return rootTreeNode;
}


//test1
let root = reConstructBinaryTree([1,2,4,7,3,5,6,8],[4,7,2,1,5,3,8,6]);
console.log(root);

root = reConstructBinaryTree([1,2,3,4],[4,3,2,1]);
console.log(root);