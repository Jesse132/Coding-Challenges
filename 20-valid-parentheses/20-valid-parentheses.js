var isValid = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let char = s[i]
    let n=stack.length-1
    if (char === '[' || char === '{' || char === '(') {
      stack.push(char);
    }
    else if (char === ']' && stack[n] === '[') {
      stack.pop();
    }
    else if (char === ')' && stack[n] === '(') {
      stack.pop();
    }
    else if (char === '}' && stack[n] === '{') {
      stack.pop();
    } else{
      return false;
    }
  }
  if(stack.length) return false;
  return true;
};