/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let hash ={};
    for(let i=0;i<nums.length;i++){
        let num=nums[i]
        if(num in hash){
        return true
        } else{
            hash[num]=i;
        }
    }
    return false;
};