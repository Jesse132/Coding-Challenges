/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {};
    for (let i=0; i<s.length; i++){
        if (s[i] in hash){
            hash[s[i]]='l'
        } else{
            hash[s[i]] = i;
        }
    }
    for(let num in hash){
        if (hash[num] !== 'l'){
            return hash[num]
        }
    }
    return -1;
};