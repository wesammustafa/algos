// Time Complexity O(N);
// Space Complexity O(1);

/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function(s) {
    const partitionLengths = [];
    const lastIndexes = new Array(26);
    
    for (let i = 0; i < s.length; i++) {
        lastIndexes[(s.charAt(i)).charCodeAt(0) - "a".charCodeAt(0)] = i;
    }
    
    console.log(lastIndexes)
    let i = 0;
    
    while(i < s.length) {
        let end = lastIndexes[(s.charAt(i)).charCodeAt(0) - "a".charCodeAt(0)];
        let j = i;
        
        while (j != end) {
            end = Math.max(end, lastIndexes[(s.charAt(j++)).charCodeAt(0) - "a".charCodeAt(0)]);
        }
        
        partitionLengths.push(j - i + 1);
        i = j + 1;
    }
    
    return partitionLengths;
};