/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    if (!nums) return 0;
    let minLength = Infinity;
    let currentSum = 0;
    let l = 0;
    
    for(let r = 0; r < nums.length; r++) {
        currentSum +=nums[r];
        while(currentSum >= target) {
            minLength = Math.min(minLength, r-l+1)
            currentSum-=nums[l]
            l++;
        }
    }
    
    if (minLength === Infinity) {
        return 0;
    }
    return minLength;
};