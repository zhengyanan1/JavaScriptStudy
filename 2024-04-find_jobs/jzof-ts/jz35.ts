class RandomListNode {
    label: number
    next: RandomListNode | null
    random: RandomListNode | null
    constructor(label?: number, next?: RandomListNode | null, random?: RandomListNode | null) {
        this.label = (label===undefined ? 0 : label)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead RandomListNode类 
 * @return RandomListNode类
 */
export function Clone(pHead: RandomListNode): RandomListNode {
    // write code here
    //1.复制节点
    let p = pHead;
    while(p){
        const clone = new RandomListNode(p.label);
        
        clone.next = p.next;
        p.next = clone;

        p = clone.next
    }
    //2. 赋值random指针
    p = pHead
    while(p){
        if(p.random){
            p.next.random = p.random.next
        }
        else{
            p.next.random = null;
        }

        p = p.next.next
    }

    //3.拆开链表 
    let pNewPre = new RandomListNode(-1), p2 = pNewPre;
    p = pHead;

    while(p){
        const cur = p.next;
        p.next = cur.next;


        p2.next = cur;
        p2 = cur;

        p = p.next;
    }

    return pNewPre.next;
}