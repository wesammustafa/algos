/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let c = x;
    let b = 0;
    
    if (x < 0) {
        return false;
    }
    
    while (c) {
        b = b * 10 + c % 10;
        c = Math.floor(c / 10);
    }
    
    return b === x;
};