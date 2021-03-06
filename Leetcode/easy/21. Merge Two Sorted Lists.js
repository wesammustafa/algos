// Time Complexity O(N)
// Space Complexity O(1)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
    let dummy = new ListNode();
    let head = dummy;
    
    while(l1 != null && l2 != null) {
        if (l1.val < l2.val) {
            dummy.next = l1;
            l1 = l1.next;
        } else {
            dummy.next = l2;
            l2 = l2.next;
        }
        
        dummy = dummy.next;
    }
    
    
    if (l1 != null) {
        dummy.next = l1;
    } else {
        dummy.next = l2;
    }
    
    return head.next;
};


// Recursive Solution
// Time Complexity: O(n + m)
// Space Complexity: O(n + m)
// where n & m are number of nodes of l1 & l2 respectively
 var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    }
    
    if (l2 === null) {
        return l1;
    }
    
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};