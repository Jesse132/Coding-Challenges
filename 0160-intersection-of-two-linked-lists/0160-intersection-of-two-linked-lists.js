/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let h1 = headA;
    let h2 = headB;
    
    while(h1 != h2) {
        h1 ? h1=h1.next : h1=headB
        h2 ? h2=h2.next : h2=headA
    }
    return h1;
};