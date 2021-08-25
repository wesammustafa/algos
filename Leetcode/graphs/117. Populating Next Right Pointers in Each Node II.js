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
var connect = function (root) {
  if (!root) return root;
  let queue = [];
  queue.push(root);
  while (queue.length) {
    let length = queue.length;
    let node;
    let temp = queue;
    queue = [];
    let last;
    for (let i = 0; i < length; i++) {
      node = temp.shift();
      if (last) last.next = node;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      last = node;
    }
  }
  return root;
};