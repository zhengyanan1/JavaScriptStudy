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
 * @return int整型二维数组
 */
export function Print(pRoot: TreeNode): number[][] {
    if(!pRoot)  return [];
    // write code here
    const result: number[][] = [];

    let queueMain: TreeNode[] = [];
    let queueHelper: TreeNode[] = [];
    queueMain.push(pRoot);
    while(queueMain.length > 0){
        const oneLine: number[] = [];
        while(queueMain.length > 0){
            const cur = queueMain.shift();

            oneLine.push(cur.val);

            cur.left && queueHelper.push(cur.left);
            cur.right && queueHelper.push(cur.right);
        }

        result.push(oneLine);
        queueMain = queueHelper;
        queueHelper = [];
    }

    return result;
}
