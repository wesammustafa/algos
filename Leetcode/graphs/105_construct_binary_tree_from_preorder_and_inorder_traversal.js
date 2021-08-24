/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if(!preorder || !preorder.length) return null;
    let root = new TreeNode(preorder[0]);
    helper(preorder, inorder, root);
    return root;
};

function helper(preorder, inorder, root) {
    if (!preorder.length) return null;
    if (preorder.length == 1) {
        return new TreeNode(preorder[0]);
    }
    let rootIndex = inorder.indexOf(root.val);
    let leftIn = inorder.slice(0, rootIndex);
    let rightIn = inorder.slice(rootIndex+1);
    let leftPre = preorder.slice(1, 1 + leftIn.length);
    let rightPre = preorder.slice(1 + leftIn.length);
    root.left = helper(leftPre, leftIn, new TreeNode(leftPre[0]));
    root.right = helper(rightPre, rightIn, new TreeNode(rightPre[0]));
    return root;
}