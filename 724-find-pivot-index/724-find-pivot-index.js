var pivotIndex = function(nums) {
    for (let i=0; i<nums.length; i++) {
        let left, right;
        let num = nums[i];
        i === 0 ? left = 0 : left = nums.slice(0,i).reduce((a, b) => a + b, 0);
        i === nums.length-1 ? right = 0 : right = nums.slice(i+1,nums.length).reduce((a, b) => a + b, 0);
        if (left === right) { return i; }
    }
    return -1
    
};