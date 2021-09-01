/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if (s.length === 0) return true
    if (s.length === 1) return false
    if (s.length % 2 !== 0) return false
    
    const stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "{" || s.charAt(i) === "(" || s.charAt(i) === "[") {
            stack.push(s.charAt(i))
        } else {
            if (stack[stack.length - 1] === "{" && s.charAt(i) === "}" || 
                stack[stack.length - 1] === "(" && s.charAt(i) === ")" || 
                stack[stack.length - 1] === "[" && s.charAt(i) === "]") {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};