function ListNode(x){
    this.val = x;
    this.next = null;
}
function ReverseList(pHead)
{
    if(pHead === null)  return null
    if(pHead.next === null) return pHead
    
    let pre = pHead, cur = pHead.next, next = null
    while(cur){
        next = cur.next
        cur.next = pre

        pre = cur
        cur = next
    }

    pHead.next = null
    return pre
}
module.exports = {
    ReverseList : ReverseList
};