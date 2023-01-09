/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let a = s.split(' ')
    let last = a.length-1;
    while(a.length){
      if(a[last].length !==0){
        return a[last].split('').length;
      }  else{
        last--;
      }
    }
    return null;
};