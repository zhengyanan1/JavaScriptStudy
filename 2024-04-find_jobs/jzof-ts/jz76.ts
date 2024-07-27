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
 * @param pHead ListNode类 
 * @return ListNode类
 */
export function deleteDuplication(pHead: ListNode): ListNode {
    // write code here
    const preHead = new ListNode(-1);
    preHead.next = pHead;

    let p = preHead;
    while(p.next){
        const cur = p.next;

        let hasSame = false;
        let next = cur.next
        while(next && next.val === cur.val){
            hasSame = true;
            
            next = next.next;
        }



        if(hasSame){
            p.next = next;
        }else{
            p = cur
        }
    }

    return preHead.next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(1);
const node3 = new ListNode(1);
const node4 = new ListNode(8);
node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(deleteDuplication(node1));
