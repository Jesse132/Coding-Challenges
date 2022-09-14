/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
  let nextSet = head.next.next;
  let nextNextSet=swapPairs(nextSet)
  let temp = head;
  
  head = head.next;
  head.next = temp;
  head.next.next=nextNextSet

  return head;
};