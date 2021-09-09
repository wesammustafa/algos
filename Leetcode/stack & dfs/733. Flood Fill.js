/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
 var floodFill = function(image, sr, sc, newColor) {
    if (image[sr][sc] === newColor)
        return image;
    
    fill(image, sr, sc, image[sr][sc], newColor);
    return image;
};


var fill = function (image, i, j, color, newColor) {
    if (i < 0 || i >= image.length || j < 0 || j >= image[i].length || image[i][j] != color) {
        return;
    }
    
    image[i][j] = newColor;
    fill(image, i + 1, j, color, newColor);
    fill(image, i - 1, j, color, newColor);
    fill(image, i, j + 1, color, newColor);
    fill(image, i, j - 1, color, newColor);
}