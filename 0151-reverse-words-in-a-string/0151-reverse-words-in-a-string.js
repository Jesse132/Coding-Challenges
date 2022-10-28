/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  a=s.split(' ')
    for(let i=0; i<a.length; i++){
      if(a[i] === ''){
        a.splice(i,1); 
        i--
      }
    }
    let l=0;
    let r=a.length-1;
    while(l<r){
        let temp=a[l]
        a[l]=a[r]
        a[r]=temp
        l++;
        r--;
    }
    return a.join(' ')
};
