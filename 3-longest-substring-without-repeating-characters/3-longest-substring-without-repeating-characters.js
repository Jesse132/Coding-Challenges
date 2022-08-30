/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(str) {
      let l = 0,
    maxLength = 0,
    hash = {};
  for (let r = 0; r < str.length; r++) {
    const rChar = str[r];
    if (rChar in hash) {
      l = Math.max(l, hash[rChar] + 1);
    }
    hash[rChar] = r;
    maxLength = Math.max(maxLength, r-l + 1);
  }
  return maxLength;
};