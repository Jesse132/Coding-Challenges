/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let hash={};
    for(let i=0; i<magazine.length;i++){
        let char=magazine[i];
        if(char in hash){hash[char]++}
        else{hash[char]=1}
    }
    
    for(let i=0; i<ransomNote.length;i++){
        let char=ransomNote[i];
        if(char in hash){
            hash[char]>1 ? hash[char]-- : delete hash[char]}
        else{return false}
    }
    return true;
};