/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums === null || nums.length === 0) return null;

  return constructBSTRecursive(nums, 0, nums.length - 1);
};

function constructBSTRecursive(nums, left, right) {
  if (left > right) {
    return null;
  }

  let mid = Math.floor((left + right) / 2);
  let current = new TreeNode(nums[mid]);
  current.left = constructBSTRecursive(nums, left, mid - 1);
  current.right = constructBSTRecursive(nums, mid + 1, right);
  return current;
}
