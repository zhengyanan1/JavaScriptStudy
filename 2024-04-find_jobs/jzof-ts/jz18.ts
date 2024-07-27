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
 * @param head ListNode类 
 * @param val int整型 
 * @return ListNode类
 */
export function deleteNode(head: ListNode, val: number): ListNode {
    // write code here
    const preFirst = new ListNode(val - 1, head);

    let cur = preFirst, next = cur.next;

    while(cur && next){
        if(next.val === val){
            cur.next = next.next
            break;
        }
        else{
            cur = next;
            next = cur.next
        }
    }

    return preFirst.next;
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(1);
let node4 = new ListNode(9);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(deleteNode(node1, 5))


