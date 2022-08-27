var twoSum = function(nums, target) { 
let hashMap = {};
    for (let i =0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (diff in hashMap) {
            return [hashMap[diff], i]
        };
        hashMap[nums[i]] = i;
    }
  return -1
}