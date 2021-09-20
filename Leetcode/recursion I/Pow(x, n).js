/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n >= 0) return helper(x, Math.abs(n));
  else return 1 / helper(x, Math.abs(n));
};

var helper = function (x, n) {
  if (x === 0) return 0;
  if (n === 0) return 1;

  let result = helper(x * x, Math.floor(n / 2));

  if (n % 2 === 0) return result;
  else return x * result;
};