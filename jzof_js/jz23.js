function ListNode(x){
    this.val = x;
    this.next = null;
}


function EntryNodeOfLoop(pHead)
{
    // 1.find one node in ring
    let p1 = pHead, p2 = pHead
    let hasRing = false

    while(p2 && p2.next){
        p1 = p1.next
        p2 = p2.next.next

        if(p1 === p2){
            hasRing = true
            break
        }
    }
    if(!hasRing)    return null

    //2. count ring len
    let pCount = p1.next, ringLen = 1
    while(pCount !== p1){
        pCount = pCount.next
        ringLen++
    }

    //3. find the ring entry
    p1 = pHead, p2 = pHead
    let count = ringLen
    while(count > 0){
        p2 = p2.next
        count--
    }

    while(p1 !== p2){
        p1 = p1.next
        p2 = p2.next
    }

    return p1
}


module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop
};