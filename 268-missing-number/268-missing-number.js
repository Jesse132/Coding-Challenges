/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    let n = nums.length;
    while (i<n) {
        let currentNum=nums[i]
        if (nums[i] < nums.length && nums[i] !== nums[currentNum] ) {
             [nums[i], nums[currentNum]] = [nums[currentNum], nums[i]];
        } else {i++};
    }
    
    for(let i=0; i<n; i++) {
        if(nums[i] !== i) return i;
    }
    
    return n;
};