/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    let hash = [];
    for(let i=0; i<nums.length; i++){
        let num=nums[i]
        hash[num]=1
    }
     for(let i=1; i<=nums.length; i++){
        if(!hash[i]) result.push(i)
    }   
    return result;
};