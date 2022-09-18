/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    let hash={};
    for(let i=0; i<s.length;i++){
        let char=s[i];
        if(char in hash){
            hash[char]++
        } else{
            hash[char] =1;
        }
    }
    
    for(let i=0; i<t.length;i++){
        let char=t[i];
        if(char in hash && hash[char]!==0){
            hash[char]--
        } else{
            return false;
        }
    }
    
    return true;
};