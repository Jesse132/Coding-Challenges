/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largest =-Infinity;
    let sum = 0;
    for (let i = 0; i<nums.length;i++) {
        sum < 0 ? sum = 0 : null;
        sum+=nums[i];
        largest = Math.max(largest, sum)
    }
    return largest;
};