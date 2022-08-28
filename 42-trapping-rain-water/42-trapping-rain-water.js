/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //2 pointers
    let total = 0
    if (!height) return total;
    let l = 0;
    let r = height.length -1;
    let lMax = height[l];
    let rMax = height[r];
    //need to determine walls and what is between the walls
    //ex 3, 0, 0, 3 = 6 water collected
    //ex 3, 0, 1, 1 = 1 water collected
    
    while (l < r) {
        if (lMax <rMax) {
            l++;
            lMax = Math.max(lMax, height[l]);
            total += lMax - height[l];
        } else {
            r--;
            rMax = Math.max(rMax, height[r]);
            total += rMax - height[r];
        }
};
     return total;
}