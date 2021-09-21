/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let sum = 0;
    let n = mat.length;
    
    for (let i = 0; i < n; i++) {
        sum += mat[i][i];
        sum += mat[i][n - i - 1];
    }
    
    if (n % 2 !== 0) {
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)];
    }
    return sum;
};