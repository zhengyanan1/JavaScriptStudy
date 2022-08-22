function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}
function Clone(pHead)
{
    if(!pHead)  return null

    // 1. insert nodes
    let p = pHead
    while(p){
        let insertNode = new RandomListNode(p.label)
        insertNode.next = p.next
        p.next = insertNode

        p = p.next.next // p.next must exist!
    }

    // 2. add random pointer
    p = pHead
    while(p){
        let cloneNode = p.next
        cloneNode.random = p.random && p.random.next

        p = p.next.next
    }

    // 3. separate the clone and the source
    p = pHead
    let result = new RandomListNode(-1), p2 = result

    while(p){
        let clone = p.next

        p.next = clone.next
        p2.next = clone


        p2 = p2.next
        p = p.next
    }

    return result.next
}
module.exports = {
    Clone : Clone
};

console.log( null && 2)