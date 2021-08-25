/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    let leftNode = root;
    while (leftNode != null && leftNode.left != null) {
        populateLowerLevel(leftNode);
        leftNode = leftNode.left;
    }
    
    return root;
};

function populateLowerLevel(startNode) {
    
    while(startNode != null) {
        startNode.left.next = startNode.right;
        if (startNode.next != null) {
            startNode.right.next = startNode.next.left;
        }
        
        startNode = startNode.next;
    }
    
}