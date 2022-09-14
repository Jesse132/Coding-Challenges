/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    n=n.toString();
    let hash={};

    let helper = function(n){
      if(n === '1') return true;
      if(hash[Number(n**2)]) return false;

      let temp =0;
        for(let i=0; i<n.length;i++){
            let num=n[i];
            temp+=num**2;
        }
        hash[temp]=1;
        n=temp.toString();
        return helper(n)
    }
    return helper(n)
};
