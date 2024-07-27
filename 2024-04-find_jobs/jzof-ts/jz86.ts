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
 * @param root TreeNode类 
 * @param o1 int整型 
 * @param o2 int整型 
 * @return int整型
 */
export function lowestCommonAncestor(root: TreeNode, p: number, q: number): number {
    // write code here
    const pathP: TreeNode[] = [];
    const pathQ: TreeNode[] = [];
    findPath(root, p, [], pathP);
    findPath(root, q, [], pathQ);
    
    let indexP = 0, indexQ = 0;
    let commonParent:TreeNode = null
    while(indexP < pathP.length && indexQ < pathQ.length){
        if(pathP[indexP] === pathQ[indexQ]){
            commonParent = pathP[indexP]
        }else{
            break;
        }
        indexP++;
        indexQ++;
    }

    return commonParent?.val;
}

function findPath(root: TreeNode, p: number, curPath: TreeNode[], result: TreeNode[]){
    if(result.length > 0) return;
    if(root == null)    return;

    curPath.push(root);
    if(root.val === p){
        result.push(...curPath);
    }

    findPath(root.left, p, curPath, result);
    findPath(root.right, p, curPath, result);
    
    curPath.pop();
}