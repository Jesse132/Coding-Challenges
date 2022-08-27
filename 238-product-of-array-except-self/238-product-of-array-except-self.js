/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let results = [];
    let amount = 1;
    
    results[0]=1;
    
    for(let i = 1; i < nums.length; i++) {
       results[i]= nums[i-1] * results[i-1];
    }
    for(let i = nums.length-1; i >= 0; i--) {
        results[i]*=amount;
        amount*=nums[i]
    }
    return results;
};