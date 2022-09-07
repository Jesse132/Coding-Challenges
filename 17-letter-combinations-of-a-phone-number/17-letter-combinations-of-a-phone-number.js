/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    
    let options = {2:"abc", 3:"def", 4:"ghi", 5:"jkl", 6:"mno", 7:"pqrs", 8:"tuv", 9:"wxyz"};
    let results =[];
    
    let helper = function(i, combo) {
        if(combo.length === digits.length){
            results.push(combo)
            return;
        };
        
        let num = options[digits[i]]
        
        for (let pos in num){
            helper(i+1, combo+num[pos])
        }
    }
    if (digits) helper(0,'')
    return results;
};