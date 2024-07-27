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
 * @return ListNode类
 */

// version1: hash
export function EntryNodeOfLoop(pHead: ListNode): ListNode {
    // write code here
    const visited = new Set<ListNode>();
    let p = pHead;
    while(p){
        if(visited.has(p))  return p;

        visited.add(p);
        p = p.next
    }

    return null;
}

// version2: 双指针法
export function EntryNodeOfLoop2(pHead: ListNode): ListNode {
    // write code here
    let pFast = pHead, pSlow = pHead;

    while(pFast && pFast.next){
        pSlow = pSlow.next;
        pFast = pFast.next.next;

        if(pFast === pSlow){
            break;
        }
    }

    if(!pFast || !pFast.next){ //没有环
        return null
    }
    console.log(pFast);

    let p1 = pHead, p2 = pFast;
    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }

    return p1;
}
