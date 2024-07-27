class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}
/**
代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *

@param pHead1 ListNode类 
@param pHead2 ListNode类 
@return ListNode类
 */

function getLen(head:ListNode):number{
    let count = 0;
    while(head){
        head = head.next;
        count++;
    }
    return count;
}
export function FindFirstCommonNode(pHead1: ListNode, pHead2: ListNode): ListNode {
    // write code here
    const len1 = getLen(pHead1);
    const len2 = getLen(pHead2);
    if(len1 * len2 === 0){
        return null;
    }

    let pLong: ListNode = null, pShort: ListNode = null;
    if(len1 >= len2){
        pLong = pHead1;
        pShort = pHead2;
    }else{
        pLong = pHead2;
        pShort = pHead1;
    }
    let diff = Math.abs(len1 - len2);
    while(diff > 0){
        pLong = pLong.next
        diff--;
    }

    while(pLong !== pShort){
        pLong = pLong.next;
        pShort = pShort.next;
    }

    return pLong
}