// 单调栈 739
var dailyTemperatures = function(T) {
  let len = T.length
  let stack = []
  let res = Array(len).fill(0)
  for(let i = 0; i < len; i++){
    while(stack.length && T[i] > T[stack[stack.length - 1]]){
      let j = stack.pop()
      res[j] = i - j
    }
    stack.push(i)
  }
  return res
};

