/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
  let colorToChange = image[sr][sc];
//potential edge case for later
  let dfs = function(i, j){
    if( !(i >= 0 && j >= 0 && i < image.length && j < image[i].length) || image[i][j] !== colorToChange || image[i][j] === color){
      return; 
    }
    if(image[i][j] === colorToChange) image[i][j] =color
    dfs(i+1,j);
    dfs(i-1,j);
    dfs(i,j+1);
    dfs(i,j-1);
  }
  dfs(sr,sc);
  return image;
};