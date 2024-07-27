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
 * @param pRootOfTree TreeNode类 
 * @return TreeNode类
 */

//version2:2个指针
export function Convert(pRootOfTree: TreeNode): TreeNode {
    if(!pRootOfTree)    return null;
    

    const pointers:{
        head: TreeNode;
        pre: TreeNode;
    } = {
        head: null,
        pre: null
    } ;
    inOrderVisit(pRootOfTree, pointers);
    return pointers.head;
}

function inOrderVisit(
    pRootOfTree: TreeNode,
    pointers:{
        head: TreeNode;
        pre: TreeNode;
    }): void{
    pRootOfTree.left && inOrderVisit(pRootOfTree.left, pointers);

    if(pointers.pre){
        pointers.pre.right = pRootOfTree;
        pRootOfTree.left = pointers.pre;
        pointers.pre = pRootOfTree;
    }
    else{
        pointers.head = pRootOfTree;
        pointers.pre = pRootOfTree;
    }

    pRootOfTree.right && inOrderVisit(pRootOfTree.right, pointers);
}


// version1: 一个指针 + 最后一次便利
// export function Convert(pRootOfTree: TreeNode): TreeNode {
//     if(!pRootOfTree)    return null;
    

//     const pre: TreeNode[] = [null];
//     inOrderVisit(pRootOfTree, pre);

//     let first = pre[0];
//     while(first.left){
//         first = first.left;
//     }
//     return first;
// }

// function inOrderVisit(pRootOfTree: TreeNode, pre: TreeNode[]): void{
//     pRootOfTree.left && inOrderVisit(pRootOfTree.left, pre);

//     pRootOfTree.left = pre[0];
//     pre[0] && (pre[0].right = pRootOfTree);
//     pre[0] = pRootOfTree;


//     pRootOfTree.right && inOrderVisit(pRootOfTree.right, pre);
// }