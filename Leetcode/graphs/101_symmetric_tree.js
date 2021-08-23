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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (root === null) return true;

  return isSymmetricChild(root.left, root.right);
};

const isSymmetricChild = function (left, right) {
  if (left === null || right === null) return right === left;

  if (left.val != right.val) return false;

  return (
    isSymmetricChild(left.left, right.right) &&
    isSymmetricChild(left.right, right.left)
  );
};
