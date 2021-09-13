// Iterative Solution
// Time Complexity O(n) & Space Complexity O(1)
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
var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};

//---------------------------------------------------------------------------------------------------------
// Recursive Solution
// Time Complexity O(n) & Space Complexity O(n) because we create new stack for each head

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
var reverseList = function (head) {
  // base case
  if (head === null || head.next === null) return head;

  // recurrence relation
  const reversedListHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return reversedListHead;
};
