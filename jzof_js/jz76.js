function ListNode(x){
    this.val = x;
    this.next = null;
}
function deleteDuplication(pHead)
{
    if(pHead == null)       return null
    if(pHead.next == null)  return pHead

    let preHead = new ListNode(-1)
    preHead.next = pHead

    let p = preHead
    while(p && p.next && p.next.next){
        const cur = p.next
        if(cur.val === cur.next.val){ // 遇到重复
            let pSameLast = cur.next.next
            while(pSameLast && pSameLast.val === cur.val){
                pSameLast = pSameLast.next
            }
            
            p.next = pSameLast
        }
        else{
            p = p.next
        }
    }

    return preHead.next
}
module.exports = {
    deleteDuplication : deleteDuplication
};