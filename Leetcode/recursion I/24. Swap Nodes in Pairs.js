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
    if (head === null || head.next === null) return head;
    const currentHead = head;
    const nextHead = head.next;
    const skipHead = head.next.next;
    
    // relink the second node to the first node
    nextHead.next = currentHead;
    
    // the firstNode's next would be the result of the swap
    currentHead.next = swapPairs(skipHead);
    
    // nextHead targets the 2nd node, which would be the first node if it reversed
    return nextHead;
};