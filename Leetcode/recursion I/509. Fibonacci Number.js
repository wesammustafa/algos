/**
 * @param {number} n
 * @return {number}
 */

// Hashtable to save results
var cache = new Map();

var fib = function(n) {
    if (cache.get(n)) return cache.get(n);
    
    let result;
    
    if (n < 2) 
        return n;
    else
        result = fib(n - 1) + fib(n - 2);
    
    cache.set(n, result);
    
    return result;
};