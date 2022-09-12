/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

let helper =function(l){
    if(digits[l] !== 9){
        digits[l]+=1;
        return digits;
    } else{
            let digit=digits[l]
            digits[l]=0;
        if(l-1<0){
                digits.unshift(1)
                return digits
            }
            helper(l-1)
        }
}

  helper(digits.length-1)
    return digits
};