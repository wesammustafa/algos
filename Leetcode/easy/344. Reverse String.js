// Time complexity: O(N)
// Space complexity: O(1)

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = (s) => {
  for (let [a, b] = [0, s.length - 1]; a < b; a++, b--) {
    [s[a], s[b]] = [s[b], s[a]];
  }
};

//------------------------------------------------------------------------------------------------------------------
// Recursive solution using the opposite directional two-pointer approach
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = (s) => {
  let helper = (left, right) => {
    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
      helper(left + 1, right - 1);
    }
  };

  helper(0, s.length - 1);
};
