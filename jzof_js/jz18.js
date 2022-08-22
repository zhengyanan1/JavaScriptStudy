

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param head ListNode类 
 * @param val int整型 
 * @return ListNode类
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteNode( head ,  val ) {
    let preHead = new ListNode(val - 1)
    preHead.next = head

    let cur = preHead
    while(cur.next){
        const _next = cur.next
        if(_next.val === val){
            cur.next = _next.next
            break
        }
        else{
            cur = _next
        }
    }

    return preHead.next
}
module.exports = {
    deleteNode : deleteNode
};

console.log("1" === 1)
