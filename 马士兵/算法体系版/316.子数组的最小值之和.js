/**
 * 给定一个数组arr，返回所有子数组最小值的累加和。
 */

//方法一：没有使用单调栈的最优解
function submatricesArrayMinSum(arr) {
  //left[i] =x : arr[i]左边，离arr[i]最近，比arr[i]小的数，位置在x
  let left = leftNearLessEquals2(arr);
  //right[i]= y :arr[i]右边，离arr[i]最近，<arr[i]小的数，位置在y
  let right = rightNearLessLess2(arr);
  let ans = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let start = i - left[i];//左边到不了的位置
    let end = right[i] - i;//右边到不了的位置
    ans += start * end * arr[i];
  }

  return ans;
}

function leftNearLessEquals2(arr) {
  let n = arr.length;
  let left = new Array(n);
  for (let i = 0; i < n; i += 1) {
    let ans = -1;
    for (let j = i - 1; j >= 0; j -= 1) {
      if (arr[j] <= arr[i]) {
        ans = j;
        break;
      }
    }
    left[i] = ans;
  }
  return ans;
}

function rightNearLessLess2(arr) {
  let n = arr.length;
  let right = new Array(n);
  for (let i = 0; i < n; i += 1) {
    let ans = -1;
    for (let j = i + 1; j < n; j += 1) {
      if (arr[j] < arr[i]) {
        ans = j;
        break;
      }
    }
    right[i] = ans;
  }
  return ans;
}


//方法二：单调栈
function submatricesArrayMinSum3(arr) {
  //left[i] =x:arr[i]左边，离arr[i]最近，比arr[i]小的数，位置在x
  let left = leftNearLessEquals3(arr);
  //right[i]=y:arr[i]右边，离arr[i]最近，<arr[i]小的数，位置在x
  let right = rightNearLessLess3(arr);
  let ans = 0;
  for (let i = 0; i < arr.length; i += 1) {
    let start = i - left[i];
    let end = right[i] - i;
    ans += start * end * arr[i];
  }

  return ans;
}

function leftNearLessEquals3(arr) {
  let n = arr.length;
  let left = new Array(n);
  let stack = [];
  for (let i = n - 1; i >= 0; i -= 1) {
    while (stack.length && arr[i] <= arr[stack.length - 1]) {
      left[stack.pop()] = i;
    }

    stack.push(i)
  }

  while (stack.length) {
    left[stack.pop()] = -1;
  }
  return left
}

function rightNearLessLess3(arr) {
  let n = arr.length;
  let right = new Array(n);
  let stack = [];
  for (let i = 0; i < n; i += 1) {
    while (stack.length && arr[i] < arr[arr.length - 1]) {
      right[stack.pop()] = -1;
    }
    stack.push(i)
  }
  while (stack.length) {
    right[stack.pop()] = -1;
  }
  return right;
}