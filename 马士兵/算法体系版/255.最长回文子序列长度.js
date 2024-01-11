/**
 * 给定一个字符串str，返回这个字符串的最长回文子序列长度。
 * 比如 ： str = “a12b3c43def2ghi1kpm”，最长回文子序列是“1234321”或者“123c321”，返回长度7。
 */

// 测试链接：https://leetcode.cn/problems/longest-palindromic-subsequence/
// 方法一：求字符串最长公共子序列
function lpsl(s) {
  if (s = null || s.length == 0) {
    return 0
  }

  const str = s.split("");
  return f(str, 0, str.length - 1)

}

//str[l..r]最长回文子序列长度返回
function f(str, l, r) {
  if (l == r) {
    return 1;
  }

  if (l == r - 1) {
    return str[l] == str[r] ? 2 : 1
  }

  // Xl Xr
  let p1 = f(str, l + 1, r - 1);
  //vl xr
  let p2 = f(str, l, r - 1);

  //xl vr
  let p3 = f(str, l + 1, r);

  //vl vr
  let p4 = str[l] == str[r] ? 2 + f(str, l + 1, r - 1) : 0;

  return Math.max(p1, p2, p3, p4)
}


//方法二：
function lpsl2(s) {
  if (s = null || s.length == 0) {
    return 0
  }

  const str = s.split("");
  const n = str.length;
  let arr = [];
  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
    for (let j = 0; j < n; j += 1) {
      arr[i][j] = 0;
    }
  }

  arr[n - 1][n - 1] = 1;
  for (let i = 0; i < n - 1; i += 1) {//填写2条对角线
    arr[i][i] = 1;
    arr[i][i + 1] = str[i] == str[i + 1] ? 2 : 1;
  }

  //从下往上，从左往右的位置开始填写
  for (let l = n - 3; l >= 0; l -= 1) {
    for (let r = i + 2; r < n; r += 1) {
      let p1 = arr[l + 1][r - 1];
      let p2 = arr[l][r - 1];
      let p3 = arr[l + 1][r];
      let p4 = str[l] == str[r] ? 2 + arr[l + 1][r - 1] : 0;

      arr[l][r] = Math.max(p1, p2, p3, p4)
    }
  }

  return arr[0][n - 1];//为什么是n-1，是由f(str,0,str.length-1)决定
}


//方法三：优化表格
function lpsl3(s) {
  if (s = null || s.length == 0) {
    return 0
  }

  const str = s.split("");
  const n = str.length;
  let arr = [];
  for (let i = 0; i < n; i += 1) {
    arr[i] = [];
    for (let j = 0; j < n; j += 1) {
      arr[i][j] = 0;
    }
  }

  arr[n - 1][n - 1] = 1;
  for (let i = 0; i < n - 1; i += 1) {//填写2条对角线
    arr[i][i] = 1;
    arr[i][i + 1] = str[i] == str[i + 1] ? 2 : 1;
  }

  //从下往上，从左往右的位置开始填写
  for (let l = n - 3; l >= 0; l -= 1) {
    for (let r = i + 2; r < n; r += 1) {
      arr[l][r] = Math.max(arr[l][r-1],arr[l+1][r])//;左下角一定不比当前值大，所以不考虑左下角，不用考虑p1
      let p4 = str[l] == str[r] ? 2 + arr[l + 1][r - 1] : 0;
      arr[l][r] = Math.max(arr[l][r],p4);
    }
  }

  return arr[0][n - 1];//为什么是n-1，是由f(str,0,str.length-1)决定
}