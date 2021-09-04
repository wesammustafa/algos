/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

// Time complexity O(N)
// Space complexity O(N)
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  if (node === null) return null;
  let map = new Map();

  return clone(node, map);
};

function clone(node, map) {
  if (map.has(node.val)) return map.get(node.val);
  let copy = new Node(node.val);
  map.set(node.val, copy);
  for (let neighbor of node.neighbors)
    copy.neighbors.push(clone(neighbor, map));
  return copy;
}
