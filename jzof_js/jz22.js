
function ListNode(x){
    this.val = x;
    this.next = null;
}

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */
 function FindKthToTail( pHead ,  k ) {
    const len = getLen(pHead)
    if(k > len)     return null

    const _index = len - k
    let count = 0, p = pHead
    while(count < _index){
        count++
        p = p.next
    }
    
    return p
    // write code here
}

function getLen(pHead){
    let p = pHead, count = 0
    while(p){
        count++
        p = p.next
    }
    return count
}

module.exports = {
    FindKthToTail : FindKthToTail
};