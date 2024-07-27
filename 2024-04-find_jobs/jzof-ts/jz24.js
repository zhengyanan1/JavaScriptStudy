/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param head ListNode类 
 * @return ListNode类
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}

function ReverseList( head ) {
    // write code here
      // write code here
      if(!head)   return null;
      if(!head.next)  return head;
      
      let pre = head, cur = pre.next, next = null;
      while(cur){
          next = cur.next
          cur.next = pre;
  
          pre = cur;
          cur = next;
      }
  
      head.next = null;
      return pre;
}
module.exports = {
    ReverseList : ReverseList
};


const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
node1.next = node2;
node2.next = node3;

console.log(ReverseList(node1));

