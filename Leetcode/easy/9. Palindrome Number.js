/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let c = x;
  let b = 0;

  if (x < 0) {
    return false;
  }

  while (c) {
    b = b * 10 + (c % 10);
    c = Math.floor(c / 10);
  }

  return b === x;
};

//--------------------------------------------------
// time O(n)
// space complexity O(1)
var isPalindrome = function (x) {
  if (x < 0 || (x % 10 === 0 && x != 0)) {
    return false;
  }

  let b = 0;
  while (x > b) {
    b = b * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === b || x === b / 10;
};
