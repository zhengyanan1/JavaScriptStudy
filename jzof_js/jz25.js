function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    const helperHead = new ListNode(-1)
    let p = helperHead, p1 = pHead1, p2 = pHead2

    while(p1 && p2){
        if(p1.val <= p2.val){
            p.next = p1

            p = p.next
            p1 = p1.next
        }
        else{
            p.next = p2

            p = p.next
            p2 = p2.next
        }
    }

    if(p1)  p.next = p1
    if(p2)  p.next = p2

    return helperHead.next
}
module.exports = {
    Merge : Merge
};