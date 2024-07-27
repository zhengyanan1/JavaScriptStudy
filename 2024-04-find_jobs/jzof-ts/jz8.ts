/*class TreeLinkNode {
 *     val: number
 *     left: TreeLinkNode | null
 *     right: TreeLinkNode | null
 *     next: TreeLinkNode | null
 *     constructor(val?: number, left?: TreeLinkNode | null, right?: TreeLinkNode | null, next?: TreeLinkNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : right)
 *     }
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pNode TreeLinkNode类 
 * @return TreeLinkNode类
 */


class TreeLinkNode {
    val: number
    left: TreeLinkNode | null
    right: TreeLinkNode | null
    next: TreeLinkNode | null
    constructor(val?: number, left?: TreeLinkNode | null, right?: TreeLinkNode | null, next?: TreeLinkNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
        this.next = (next===undefined ? null : right)
    }
}
export function GetNext(pNode: TreeLinkNode): TreeLinkNode {
    // write code here
    // 先看子节点
    // 1. 如果有右子树
    if(pNode.right){
        return getFirstWithInOrder(pNode.right);
    }

    // 在看父节点
    //  有父节点的情况下
    if(pNode.next){
        if(pNode.next.left === pNode){
            // 自己是左孩子
            return pNode.next;
        }
        else{ // pNode.next.right === pNode
            // 自己是右孩子
            let parent = pNode.next;
            while(parent && parent.next){
                if(parent === parent.next.left){
                    return parent.next;
                }

                parent = parent.next;
            }

        }
    }

    return null;
}

function getFirstWithInOrder( pNode: TreeLinkNode): TreeLinkNode {
    const p = pNode;
    if(p.left){
        // 有左孩子，递归查找
        return getFirstWithInOrder(p.left);
    } 
    else{
        // 没有左孩子，就返回自身
        return p;
    }
}