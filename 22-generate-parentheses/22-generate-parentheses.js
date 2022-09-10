/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  let stack = [];
  
let helper = function(open,end) {
  //base case
  if (open === n && end === n){
    result.push(stack.join(''));
    return;
  }
  //recursion
  if(open<n){
    stack.push('(')
    helper(open+1, end)
    stack.pop();
  }
  if(end<open){
    stack.push(')')
    helper(open,end+1)
    stack.pop()
  }
}
  helper(0,0)

return result;
};