// Time Complexity O(N);
// Time Complexity O(d) d is number of digits

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];
  for (let token of tokens) {
    if ("+-*/".includes(token)) {
      const y = stack.pop();
      const x = stack.pop();

      if (token === "+") {
        stack.push(x + y);
      } else if (token === "*") {
        stack.push(x * y);
      } else if (token === "-") {
        stack.push(x - y);
      } else {
        stack.push(x / y >= 0 ? Math.floor(x / y) : Math.ceil(x / y));
      }
    } else {
      stack.push(parseFloat(token));
    }
  }

  return stack.pop();
};
