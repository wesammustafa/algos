/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// Time complexity O(N);
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var goodNodes = function(root) {
    
    function dfs(node, maxVal) {
        if (node === null) return 0;
        
        let result = 0;
        if (node.val >= maxVal) result = 1;
        maxVal = Math.max(node.val, maxVal);
        result += dfs(node.left, maxVal);
        result += dfs(node.right, maxVal);
        
        return result;
    }
    
    
    return dfs(root, root.val);
};