/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    //2 pointer
  let area = 0;
  let l=0;
  let r=height.length-1;
  while(l<r){
      if(height[l]<height[r]){
          area=Math.max(area, height[l]*(r-l))
          l++
      } else{area=Math.max(area, height[r]*(r-l))
        r--}
  }
  return area;
}