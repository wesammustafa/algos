/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let result = new Array(temperatures.length).fill(0);
    let stack = [];
    
    for (let i = temperatures.length - 1; i >= 0; i--) {
        while(stack.length && temperatures[i] >= stack[stack.length -1][0]) {
            stack.pop();
        }
        if (stack.length && temperatures[i] < stack[stack.length - 1][0]) {
            result[i] = stack[stack.length - 1][1] - i;
        }
        stack.push([temperatures[i], i]);
    }
    
    return result;
};