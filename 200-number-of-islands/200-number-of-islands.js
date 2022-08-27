/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
   let count = 0;
    
    for(let i = 0; i<grid.length ; i++){
        for(let j = 0; j<grid[0].length; j++){
            if(grid[i][j] === '1'){
               seenIsland(i, j);
               count++; 
            }   
        }   
    }
    return count;

    function seenIsland(x,y){
        if (x>= grid.length || x<0 || y>= grid[0].length || y<0) return;
        if (grid[x][y] !== '1') return;
        grid[x][y] = '2';
        seenIsland(x+1, y);
        seenIsland(x-1, y);
        seenIsland(x, y+1);
        seenIsland(x, y-1);    
    }
}
