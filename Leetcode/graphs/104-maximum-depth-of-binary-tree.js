/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
    if (!root) return 0;
    console.log("root: ", root.val);
    const left = maxDepth(root.left);
    console.log("left depth: ", left);
    const right = maxDepth(root.right);
    console.log("right depth: ", right);
    const max = Math.max(left, right) + 1;
    console.log("max: ", max);
    console.log('------------------------')
    return max;
};