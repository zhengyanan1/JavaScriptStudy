/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head)
{
    let result = []
    let p = head;
    while(p){
        result.unshift(p.val)
        p = p.next
    }
    result.rev
    return result
}
module.exports = {
    printListFromTailToHead : printListFromTailToHead
};