/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {

  let visited = {};
  let queue = [];
  let min = 0;
  let count = 0;

  for(let i=0; i<grid.length; i++){
    for(let j=0; j<grid[i].length; j++){
      if(grid[i][j] === 1) count++;
      if(grid[i][j] === 2) queue.push([i,j]);
    }
  }
  
  while(queue.length) {
    let ogQueueLength = queue.length;
    for (let i=0; i < ogQueueLength; i++){
      let [x, y]  = queue.shift();
      let traverse = function(x,y){
        if((x >= 0 && y >= 0) && (x < grid.length && y < grid[0].length) && grid[x][y] === 1) {
            grid[x][y] = 2;
            count--;
            queue.push([x,y]);
      }
      }
      traverse(x+1,y);
      traverse(x-1,y);
      traverse(x,y+1);
      traverse(x,y-1);
    }
    if(queue.length > 0) min++;
  }

  return count === 0 ? min : -1; 
};
