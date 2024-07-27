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
代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *

@param proot TreeNode类 
@param k int整型 
@return int整型
 */

let target = -1;
let count = -1;

export function KthNode(proot: TreeNode, k: number): number {
    if(!proot){
        return -1;
    }

    target = -1;
    count = k;
    visitByInorder(proot);

    if(count === 0) return target;
    return -1;
}

function visitByInorder(root: TreeNode):void{
    if(target >= 0) return;
    root.left && visitByInorder(root.left);

    if(target < 0){
        count--;
        if(count === 0){
            target = root.val;
            return;
        }
    }

    root.right && visitByInorder(root.right);
}
