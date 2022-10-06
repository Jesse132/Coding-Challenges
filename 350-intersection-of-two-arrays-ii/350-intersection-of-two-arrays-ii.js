/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    if(nums2 > nums1) return intersect(nums2, nums1)
    let result = [];
    let hash = {};
    
    for(let i=0; i<nums1.length; i++){
        let num=nums1[i]
        if (num in hash){
            hash[num]++
        } else{
            hash[num] = 1
        }
    }
    
    for(let i=0; i<nums2.length; i++){
        let num=nums2[i]
        if(num in hash && hash[num] !==0){
            result.push(num)
            hash[num]--
        }
    }
    
    return result;
};