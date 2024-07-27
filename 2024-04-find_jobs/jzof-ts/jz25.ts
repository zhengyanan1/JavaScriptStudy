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
 * @param pHead1 ListNode类 
 * @param pHead2 ListNode类 
 * @return ListNode类
 */
export function Merge(pHead1: ListNode, pHead2: ListNode): ListNode {
    // write code here
    const pre = new ListNode(-1);

    let p1 = pHead1, p2 = pHead2, cur = pre;
    while(p1 && p2){
        if(p1.val <= p2.val){
            cur.next = p1;
            p1 = p1.next;
        }else{
            cur.next = p2;
            p2 = p2.next;
        }

        cur = cur.next;
    }

    if(p1){
        cur.next = p1
    }
    if(p2){
        cur.next = p2;
    }

    return pre.next;
}
