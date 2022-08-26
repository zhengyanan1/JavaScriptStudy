function ListNode(x){
    this.val = x;
    this.next = null;
}
function FindFirstCommonNode(pHead1, pHead2)
{
    let len1 = GetLen(pHead1)
    let len2 = GetLen(pHead2)
    let pHeadLong, pHeadShort, lenLong, lenShort

    if(len1 < len2){
        pHeadLong = pHead2
        pHeadShort = pHead1
        lenLong = len2
        lenShort = len1
    }
    else{
        pHeadLong = pHead1
        pHeadShort = pHead2
        lenLong = len1
        lenShort = len2
    }

    let diff = lenLong - lenShort

    let pLong = pHeadLong, pShort = pHeadShort

    while(diff > 0){
        pLong = pLong.next
        diff--
    }

    while(pLong && pShort && pLong != pShort){
        pLong = pLong.next
        pShort = pShort.next
    }

    return pLong && pShort
}

function GetLen(head){
    let len = 0
    while(head){
        head = head.next
        len++
    }
    return len
}
module.exports = {
    FindFirstCommonNode : FindFirstCommonNode
};