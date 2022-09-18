/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let diff = 0;
    let l=0;
    let r=1
    while(r<prices.length){
        if(prices[l]<prices[r]){
            currentDiff=prices[r]-prices[l]
            diff=Math.max(diff, currentDiff)
        } else{
          l=r;
        }
      r++;
    }
    return diff;
};