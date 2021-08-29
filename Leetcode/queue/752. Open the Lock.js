/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
 var openLock = function(deadends, target) {
    const dead = new Set(deadends);
    const queue = [["0000", 0]];
    const seen = new Set(["0000"]);
    
    while(queue.length > 0) {
        const shifted = queue.shift();
        const [curr, steps] = shifted;
        if (curr === target) return steps;
        if (dead.has(curr)) continue;
        for (let next of getNextStates(curr)) {
            if (seen.has(next)) continue;
            seen.add(next);
            queue.push([next, steps + 1]);
        }
    }
    
    return -1;
};


function getNextStates(s = "0000") {
    const ans = [];
    
    for (let i = 0; i < s.length; i++) {
        ans.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
        ans.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
    }
    
    return ans;
}