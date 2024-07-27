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

export function TreeDepth(pRoot: TreeNode): number {
    // write code here

    if (!pRoot) return 0;
    return 1 + Math.max(TreeDepth(pRoot.left), TreeDepth(pRoot.right));
}
