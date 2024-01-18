//arr=[3 , 1,  2,  3]
//[
//  0:[-1,1]
//  1:[-1,-1]
//  2:[1, -1]
//  3:[2,-1]
// ]
//无重复的时候
// 方法一：arr数组中无重复值
function getNearLessNoRepeat(arr) {
  let n = arr.length;
  let res = new Array(n);
  for (let i = 0; i < n; i += 1) {
    res[i] = new Array(2)
  }
  //栈顶到栈底是由大到小
  //只存位置
  //先进后出
  let stack = [];
  for (let i = 0; i < n; i += 1) {
    //当遍历到i位置的数,arr[i]
    while (stack.length && arr[stack[stack.length-1]] > arr[i]) {
      let popIndex = stack.pop();
      let leftLessIndex = stack.length ? -1 : stack[stack.length-1];
      res[popIndex][0] = leftLessIndex;
      res[popIndex][1] = i;
    }
    stack.push(i);
  }

  //假设栈里面还有东西
  while (stack.length) {
    let popIndex = stack.pop();
    let leftLessIndex = stack.length ? -1 : stack[stack.length-1];
    res[popIndex][0] = leftLessIndex;
    res[popIndex][1] = -1;
  }
  return res;
}



//重复的值的时候
// 方法二：arr数组中有重复值
function getNearLess(arr) {
  let n = arr.length;
  let res = new Array(n);
  for (let i = 0; i < n; i += 1) {
    res[i] = new Array(2)
  }
  let stack = [];
  for (let i = 0; i < n; i += 1) {
    while (stack.length && arr[stack[stack.length-1][0]] > arr[i]) {
      //弹出这个链表的结构
      let popIs = stack.pop();
      let leftLessIndex = !stack.length ? -1 : stack[stack.length-1][stack[stack.length-1].length - 1];
      for (let popi of popIs) {
        res[popi][0] = leftLessIndex;
        res[popi][1] = i;
      }
    }

    if (stack.length && arr[stack[stack.length-1][0]] == arr[i]) {//这个相等
      stack[0].push(i)
    } else {
      let list = [];
      list.push(i);
      stack.push(list)
    }
  }
  while (stack.length>0) {
    let popIs = stack.pop();
    let leftLessIndex = stack.length ? -1 : stack[stack.length-1][stack[0].length - 1];
    for (let popi of popIs) {
      res[popi][0] = leftLessIndex;
      res[popi][1] = i;
    }
  }

  return res;

}