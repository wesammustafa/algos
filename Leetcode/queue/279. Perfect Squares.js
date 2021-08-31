/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
    if(n == 0) return 0
    
    var squares = []
    var queue = [n]
    var level = 1
    
    for(var i = 1; i <= n; i++) {
        const num = i ** 2
        if(num > n) break
        squares.push(num)
    }
    
    while(queue.length) {
        var size = queue.length
        var visited = new Set()
        
        for(var i = 0; i < size; i++) {
            var num = queue.shift()
            
            for(var sq of squares) {
                
                const diff = num - sq
                
                if(diff < 0) continue
                
                if(diff === 0) {
                    return level
                }
                
                if(!visited.has(diff)) {
                    visited.add(diff)
                    queue.push(diff)
                }
            }
        }
        
        level += 1
    }
    
    return level
    
};
