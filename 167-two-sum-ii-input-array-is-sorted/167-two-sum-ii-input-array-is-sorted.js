/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, target_sum) {
      // TODO: Write your code here
  let l = 0;
  let r = arr.length-1;

  while (l < r) {
    let sum = arr[l] + arr[r]
    if (sum === target_sum) return [l+1,r+1]
    if (sum < target_sum) {
      l++;
    } else {
      r--;
    }
  }
  return [-1, -1];
};