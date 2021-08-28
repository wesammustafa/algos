/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    if (grid === null || grid.length === 0) return 0;
    
    let islands = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            {
                if (grid[i][j] === "1") {
                    // increase islands count as we found new island
                    islands++;
                    
                    // sink the island by setting it's parts to "0"
                    bfs(grid, i, j);
                }
            }
        }
    }
    
    return islands;
};


function bfs(grid, i, j) {
    let totalRows = grid.length;
    let totalCols = grid[0].length;
    let queue = [[i, j]];
    
    while(queue.length > 0) {
        let curr = queue.shift();
        let currRow = curr[0];
        let currCol = curr[1];
        
        if (currRow < 0 || currRow === totalRows || currCol < 0 || currCol === totalCols) {
            continue;
        }
        
        if (grid[currRow][currCol] === '0') {
            continue;
        }
        
        if (grid[currRow][currCol] === '1') {
            grid[currRow][currCol] = '0'
        }
        
        // looks in all directions if found an island add it to the queue to sink it
        queue.push([currRow + 1, currCol]);
        queue.push([currRow - 1, currCol]);
        queue.push([currRow, currCol + 1]);
        queue.push([currRow, currCol - 1]);        
    }
}