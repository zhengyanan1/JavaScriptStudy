/*class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */

export function FindKthToTail(pHead: ListNode, k: number): ListNode {
    // write code here
    if(!pHead || k === 0){
        return null;
    }

    // 拦截length<k的情况
    let node1 = pHead, nodeK = node1;
    while(k > 1){
        if(nodeK.next){
            nodeK = nodeK.next;
            k--
        }
        else{
            //长度都没有k
            return  null;
        }
    }

    while(nodeK.next){
        node1 = node1.next
        nodeK = nodeK.next;
    }
    return node1;
}
