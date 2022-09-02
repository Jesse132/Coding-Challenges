/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let min = Infinity;
    let max = -Infinity;
    
    for(let i=0; i <nums.length; i++) {
        num = nums[i]
        min = Math.min(num, min);
        max = Math.max(num, max);        
    }
    
    for (let i=min; i>0; i-- ) {
        if(max%i===0 && min%i===0) {
            return i
        }
    }
    return null;
};