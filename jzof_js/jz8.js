/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/

/*  1. 如果pNode 有右孩子=>那就是右孩子的最左孩子
    2. 否则，那就看pNode 是parent的左孩子还是右孩子还是没有parent
        如果pNode 是parent的左孩子=>parent
        如果pNode 是parent的右孩子=>根
        如果parent 是null=>null
*/
function GetNext(pNode)
{
    if(pNode.right){
        return GetFirstInorder(pNode.right)
    }
    else if(pNode.next == null){
        return null
    }
    else if(pNode == pNode.next.left){
        return pNode.next
    }
    else{ // pNode = pNode.next.right
        let current = pNode.next
        while(current.next){
            if(current == current.next.left)    return current.next
            else        current = current.next
        }
        return null
    }
}

function GetFirstInorder(headNode){
    while(headNode.left){
        headNode = headNode.left
    }
    return headNode
}
module.exports = {
    GetNext : GetNext
};