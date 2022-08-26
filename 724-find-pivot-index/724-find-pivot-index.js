var pivotIndex = function(nums) {
        let left = 0
        let right = nums.slice().reduce((a, b) => a + b, 0);

    for (let i=0; i<nums.length; i++) {
        let num = nums[i];
        right -= num
        if (left === right) { return i; }
        left+=nums[i]
    }
    return -1
};